/**
 * My Profile JavaScript
 * Handles user profile display and data fetching
 */

// Global variables
let currentUser = null;
let userProfileData = null;

/**
 * Initialize profile page
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('My Profile page loaded');
    
    // Check if user is logged in
    checkUserLoginStatus();
    
    // Load user profile data
    loadUserProfile();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize personal info update functionality
    initPersonalInfoUpdate();
});

/**
 * Check if user is logged in
 */
function checkUserLoginStatus() {
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    
    if (!userEmail) {
        // User not logged in, redirect to home page
        console.log('User not logged in, redirecting to home page');
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = {
        email: userEmail
    };
    
    console.log('User logged in:', currentUser.email);
}

/**
 * Load user profile data
 */
async function loadUserProfile() {
    if (!currentUser) {
        console.error('No current user found');
        return;
    }
    
    try {
        console.log('Loading user profile for:', currentUser.email);
        
        // Show loading state
        showLoadingState();
        
        // Fetch user data from API
        const userData = await awsAuth.getUserInfo(currentUser.email);
        
        console.log('User profile data received:', userData);
        console.log('User data structure:', JSON.stringify(userData, null, 2));
        
        // Update profile display
        updateProfileDisplay(userData);
        
        // Store user data globally
        userProfileData = userData;
        
    } catch (error) {
        console.error('Error loading user profile:', error);
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);
        
        // Even if API fails, try to update with available data
        console.log('Attempting fallback profile update with current user data');
        updateProfileDisplay(null); // This will use currentUser.email as fallback
        
        showErrorState(`Failed to load profile data: ${error.message}`);
    }
}

/**
 * Update profile display with real user data
 */
function updateProfileDisplay(userData) {
    try {
        console.log('Updating profile display with data:', userData);
        
        // If no userData, use current user email as fallback
        if (!userData && currentUser && currentUser.email) {
            userData = { email: currentUser.email };
        }
        
        // Update profile name
        const profileName = document.querySelector('.profile-name');
        if (profileName) {
            let displayName = 'User'; // Default
            
            // First try userData
            if (userData && userData.firstName && userData.lastName) {
                displayName = `${userData.firstName} ${userData.lastName}`;
            } else if (userData && userData.name) {
                displayName = userData.name;
            } else {
                // Try to get from JWT token
                const idToken = sessionStorage.getItem('idToken');
                if (idToken) {
                    try {
                        const decoded = decodeJwt(idToken);
                        console.log('JWT decoded for name:', decoded);
                        
                        if (decoded.given_name && decoded.family_name) {
                            displayName = `${decoded.given_name} ${decoded.family_name}`;
                        } else if (decoded.name) {
                            displayName = decoded.name;
                        }
                    } catch (error) {
                        console.error('Error decoding JWT for name:', error);
                    }
                }
                
                // Last resort: use email name
                if (displayName === 'User') {
                    const email = userData?.email || currentUser?.email;
                    if (email) {
                        const emailName = email.split('@')[0];
                        displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1);
                    }
                }
            }
            
            profileName.textContent = displayName;
            console.log('Profile name set to:', displayName);
        }
        
        // Update profile email
        const profileEmail = document.querySelector('.profile-email');
        if (profileEmail) {
            profileEmail.innerHTML = `<i class="fas fa-envelope"></i> ${userData.email || currentUser.email}`;
        }
        
        // Update member since date
        const memberSince = document.querySelector('.member-since');
        if (memberSince && userData.createdAt) {
            const joinDate = new Date(userData.createdAt);
            const monthYear = joinDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
            });
            memberSince.innerHTML = `<i class="fas fa-calendar-alt"></i> Member since ${monthYear}`;
        } else if (memberSince) {
            memberSince.innerHTML = `<i class="fas fa-calendar-alt"></i> Member since ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
        }
        
        // Update profile picture if available
        if (userData.picture) {
            updateProfilePicture(userData.picture);
        }
        
        // Update avatar initials
        updateAvatarInitials(userData);
        
        // Update additional profile information
        updateAdditionalProfileInfo(userData);
        
        console.log('Profile display updated successfully');
        
    } catch (error) {
        console.error('Error updating profile display:', error);
    }
}

/**
 * Update profile picture
 */
function updateProfilePicture(pictureUrl) {
    const profileAvatar = document.querySelector('.profile-avatar img');
    if (profileAvatar && pictureUrl) {
        profileAvatar.src = pictureUrl;
        profileAvatar.alt = 'Profile Picture';
    }
}

/**
 * Update avatar initials
 */
function updateAvatarInitials(userData) {
    const avatarInitials = document.querySelector('.profile-initials');
    if (avatarInitials) {
        let initials = 'U'; // Default
        
        console.log('updateAvatarInitials - userData:', userData);
        
        // First try to get from JWT token if userData doesn't have names
        if (!userData || (!userData.firstName && !userData.lastName)) {
            const idToken = sessionStorage.getItem('idToken');
            if (idToken) {
                try {
                    const decoded = decodeJwt(idToken);
                    console.log('JWT decoded data:', decoded);
                    
                    if (decoded.given_name && decoded.family_name) {
                        initials = (decoded.given_name.charAt(0) + decoded.family_name.charAt(0)).toUpperCase();
                        console.log('Using JWT names for initials:', initials);
                    } else if (decoded.name) {
                        const nameParts = decoded.name.split(' ');
                        if (nameParts.length >= 2) {
                            initials = (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
                        } else {
                            initials = nameParts[0].charAt(0).toUpperCase();
                        }
                        console.log('Using JWT name for initials:', initials);
                    }
                } catch (error) {
                    console.error('Error decoding JWT for initials:', error);
                }
            }
        }
        
        // If we still don't have proper initials, try userData
        if (initials === 'U' && userData) {
            if (userData.firstName && userData.lastName) {
                initials = (userData.firstName.charAt(0) + userData.lastName.charAt(0)).toUpperCase();
                console.log('Using userData names for initials:', initials);
            } else if (userData.name) {
                const nameParts = userData.name.split(' ');
                if (nameParts.length >= 2) {
                    initials = (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
                } else {
                    initials = nameParts[0].charAt(0).toUpperCase();
                }
                console.log('Using userData name for initials:', initials);
            }
        }
        
        // Last resort: use email (but only first letter, not full email name)
        if (initials === 'U') {
            const email = userData?.email || currentUser?.email;
            if (email) {
                initials = email.charAt(0).toUpperCase();
                console.log('Using email first letter for initials:', initials);
            }
        }
        
        avatarInitials.textContent = initials;
        console.log('Final avatar initials:', initials);
    }
}

/**
 * Update additional profile information
 */
function updateAdditionalProfileInfo(userData) {
    // Update any additional profile fields if they exist
    const profileStatus = document.querySelector('.profile-status');
    if (profileStatus) {
        profileStatus.textContent = userData.status || 'Active';
    }
    
    // Update provider information
    const providerInfo = document.querySelector('.provider-info');
    if (providerInfo && userData.provider) {
        providerInfo.innerHTML = `<i class="fas fa-sign-in-alt"></i> Signed in with ${userData.provider.charAt(0).toUpperCase() + userData.provider.slice(1)}`;
    }
}

/**
 * Show loading state
 */
function showLoadingState() {
    const profileName = document.querySelector('.profile-name');
    const profileEmail = document.querySelector('.profile-email');
    const memberSince = document.querySelector('.member-since');
    
    if (profileName) profileName.textContent = 'Loading...';
    if (profileEmail) profileEmail.innerHTML = '<i class="fas fa-envelope"></i> Loading...';
    if (memberSince) memberSince.innerHTML = '<i class="fas fa-calendar-alt"></i> Loading...';
}

/**
 * Show error state
 */
function showErrorState(message) {
    const profileName = document.querySelector('.profile-name');
    const profileEmail = document.querySelector('.profile-email');
    const memberSince = document.querySelector('.member-since');
    
    if (profileName) profileName.textContent = 'Error';
    if (profileEmail) profileEmail.innerHTML = '<i class="fas fa-envelope"></i> Failed to load';
    if (memberSince) memberSince.innerHTML = '<i class="fas fa-calendar-alt"></i> Error';
    
    // Show error notification
    if (typeof showError === 'function') {
        showError(message);
    } else {
        alert(message);
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Edit profile button
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', handleEditProfile);
    }
    
    // Sign out button
    const signOutBtn = document.querySelector('.sign-out-btn');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', handleSignOut);
    }
    
    // Avatar upload button
    const avatarUploadBtn = document.querySelector('.avatar-upload-btn');
    if (avatarUploadBtn) {
        avatarUploadBtn.addEventListener('click', handleAvatarUpload);
    }
}

/**
 * Handle edit profile
 */
function handleEditProfile() {
    console.log('Edit profile clicked');
    // TODO: Implement edit profile functionality
    if (typeof showInfo === 'function') {
        showInfo('Edit profile functionality coming soon!', 'Feature Coming Soon');
    } else {
        alert('Edit profile functionality coming soon!');
    }
}

/**
 * Handle sign out
 */
async function handleSignOut() {
    try {
        console.log('Signing out user');
        
        // Call AWS logout
        await awsAuth.logout();
        
        // Clear local storage
        localStorage.removeItem('userEmail');
        sessionStorage.removeItem('userEmail');
        
        // Redirect to home page
        window.location.href = 'index.html';
        
    } catch (error) {
        console.error('Error signing out:', error);
        // Still redirect even if logout fails
        localStorage.removeItem('userEmail');
        sessionStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    }
}

/**
 * Handle avatar upload
 */
function handleAvatarUpload() {
    console.log('Avatar upload clicked');
    // TODO: Implement avatar upload functionality
    if (typeof showInfo === 'function') {
        showInfo('Avatar upload functionality coming soon!', 'Feature Coming Soon');
    } else {
        alert('Avatar upload functionality coming soon!');
    }
}

/**
 * Refresh profile data
 */
async function refreshProfile() {
    console.log('Refreshing profile data');
    await loadUserProfile();
}

/**
 * Get current user data
 */
function getCurrentUser() {
    return currentUser;
}

/**
 * Get user profile data
 */
function getUserProfileData() {
    return userProfileData;
}

// Test function to debug profile loading
async function testProfileLoading() {
    console.log('=== Testing Profile Loading ===');
    console.log('Current user:', currentUser);
    console.log('User email from storage:', localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail'));
    
    try {
        console.log('Testing API call...');
        const result = await awsAuth.getUserInfo(currentUser.email);
        console.log('API result:', result);
    } catch (error) {
        console.error('API error:', error);
    }
    
    console.log('=== End Test ===');
}

// API endpoints
const API = {
    getUser: 'https://fo6c74qovg.execute-api.af-south-1.amazonaws.com/get-user-info',
    updateUser: 'https://fo6c74qovg.execute-api.af-south-1.amazonaws.com/update-user',
    changePassword: 'https://fo6c74qovg.execute-api.af-south-1.amazonaws.com/change-password',
    logout: 'https://fo6c74qovg.execute-api.af-south-1.amazonaws.com/logout'
};

// Decodes a JWT token
function decodeJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to decode JWT:", e);
        return null;
    }
}

// Shows a notification to the user
function showNotification(message, type = 'info') {
    // Check if notification container exists
    let container = document.getElementById('notificationContainer');
    if (!container) {
        // Create container if it doesn't exist
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type} show`;
    
    // Set icon based on type
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';
    
    // Create notification content
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon"><i class="fas ${iconClass}"></i></div>
            <div class="notification-message">
                <div class="notification-text">${message}</div>
            </div>
            <button class="notification-close">&times;</button>
        </div>
        <div class="notification-progress"><div class="notification-progress-bar"></div></div>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
    }
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        notification.remove();
    }, 10000);
}

// Initializes personal information update functionality
function initPersonalInfoUpdate() {
    // Check if we're on the personal info page
    const personalInfoForm = document.getElementById('personalInfoForm');
    if (!personalInfoForm) return;
    
    console.log('Initializing personal info update functionality');
    
    // Load user data into form
    loadUserDataIntoForm();
    
    // Handle form submission
    personalInfoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('Personal info form submitted');
        
        // Get form data
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Validate form data
        if (!firstName || !lastName || !email) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = personalInfoForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Saving...';
        submitBtn.disabled = true;
        
        try {
            const accessToken = sessionStorage.getItem('accessToken');
            if (!accessToken) {
                throw new Error('You must be logged in to update your profile.');
            }
            
            const response = await fetch(API.updateUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName
                })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to update profile information.');
            }
            
            // Store updated user info in sessionStorage to persist across pages
            sessionStorage.setItem('userProfileData', JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                lastUpdated: new Date().toISOString()
            }));
            
            // Success
            showNotification('Profile information updated successfully!', 'success');
            
            // Update UI elements that display user info
            updateUserInfoDisplay(firstName, lastName, email);
            
        } catch (error) {
            console.error('Error updating profile:', error);
            showNotification(error.message, 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Loads user data into the personal info form
function loadUserDataIntoForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    
    if (!firstNameInput || !lastNameInput || !emailInput) return;
    
    const idToken = sessionStorage.getItem('idToken');
    if (!idToken) return;
    
    // First check if we have updated profile data in sessionStorage
    const storedProfileData = sessionStorage.getItem('userProfileData');
    let firstName, lastName, email;
    
    if (storedProfileData) {
        // Use the updated profile data from sessionStorage
        const profileData = JSON.parse(storedProfileData);
        firstName = profileData.firstName;
        lastName = profileData.lastName;
        email = profileData.email;
        console.log('Using updated profile data from sessionStorage for form:', profileData);
    } else {
        // Fall back to data from JWT token
        const userData = decodeJwt(idToken);
        if (!userData) return;
        
        firstName = userData.given_name || '';
        lastName = userData.family_name || '';
        email = userData.email || '';
    }
    
    // Populate form fields
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    emailInput.value = email;
    
    // Disable email field as it's typically not changeable
    emailInput.disabled = true;
    emailInput.title = 'Email address cannot be changed';
}

// Updates UI elements that display user information
function updateUserInfoDisplay(firstName, lastName, email) {
    // Update profile initials
    const profileInitials = document.querySelector('.profile-initials');
    if (profileInitials) {
        profileInitials.textContent = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();
    }
    
    // Update profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        profileName.textContent = `${firstName} ${lastName}`.trim();
    }
    
    // Update profile email
    const profileEmail = document.querySelector('.profile-email');
    if (profileEmail) {
        profileEmail.textContent = email;
    }
    
    // Update sidebar avatar (if on the page)
    const sidebarAvatar = document.querySelector('.sidebar-avatar');
    if (sidebarAvatar) {
        sidebarAvatar.textContent = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();
    }
    
    // Update sidebar user name (if on the page)
    const sidebarUserName = document.querySelector('.sidebar-user-name');
    if (sidebarUserName) {
        sidebarUserName.textContent = `${firstName} ${lastName}`.trim();
    }
}

// Export functions for global access
window.myProfile = {
    refreshProfile,
    getCurrentUser,
    getUserProfileData,
    handleSignOut,
    testProfileLoading,
    initPersonalInfoUpdate,
    loadUserDataIntoForm,
    updateUserInfoDisplay
};

