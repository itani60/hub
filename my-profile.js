// API endpoints
const API = {
    getUser: 'https://la81umkg80.execute-api.af-south-1.amazonaws.com/user',
    updateUser: 'https://la81umkg80.execute-api.af-south-1.amazonaws.com/user',
    changePassword: 'https://la81umkg80.execute-api.af-south-1.amazonaws.com/change-password',
    logout: 'https://la81umkg80.execute-api.af-south-1.amazonaws.com/logout'
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

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const profileInitials = document.querySelector('.profile-initials');
    const profileName = document.querySelector('.profile-name');
    const profileEmail = document.querySelector('.profile-email');
    const memberSince = document.querySelector('.member-since');
    const wishlistCount = document.querySelector('.wishlist-stat .stat-count');
    const alertsCount = document.querySelector('.alerts-stat .stat-count');
    
    // Function to load user profile data
    function loadUserProfile() {
        const idToken = sessionStorage.getItem('idToken');
        
        if (!idToken) {
            // Redirect to login page if not logged in
            window.location.href = 'index.html';
            return;
        }
        
        // First check if we have updated profile data in sessionStorage
        const storedProfileData = sessionStorage.getItem('userProfileData');
        let firstName, lastName, email, initials;
        
        if (storedProfileData) {
            // Use the updated profile data from sessionStorage
            const profileData = JSON.parse(storedProfileData);
            firstName = profileData.firstName;
            lastName = profileData.lastName;
            email = profileData.email;
        } else {
            // Fall back to data from JWT token
            const userData = decodeJwt(idToken);
            if (!userData) return;
            
            firstName = userData.given_name || '';
            lastName = userData.family_name || '';
            email = userData.email || '';
        }
        
        // Update UI with the profile information
        initials = (firstName[0] || '') + (lastName[0] || '');
        
        if (profileInitials) profileInitials.textContent = initials.toUpperCase();
        if (profileName) profileName.textContent = `${firstName} ${lastName}`.trim();
        if (profileEmail) profileEmail.textContent = email;
        
        // Set member since date (always from JWT token)
        if (memberSince) {
            const userData = decodeJwt(idToken);
            if (userData && userData.UserCreateDate) {
                const regDate = new Date(userData.UserCreateDate);
                memberSince.textContent = `Member since ${regDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`;
            } else {
                // If UserCreateDate is not available, use current date
                const currentDate = new Date();
                memberSince.textContent = `Member since ${currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`;
            }
        }
    }
    
    // Function to load wishlist count
    function loadWishlistCount() {
        try {
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            if (wishlistCount) wishlistCount.textContent = wishlist.length;
        } catch (e) {
            console.error("Failed to load wishlist count:", e);
            if (wishlistCount) wishlistCount.textContent = '0';
        }
    }
    
    // Function to load price alerts count
    function loadPriceAlertsCount() {
        try {
            // In a real application, this would likely come from an API
            // For now, we'll use a placeholder or localStorage
            const priceAlerts = JSON.parse(localStorage.getItem('priceAlerts')) || [];
            if (alertsCount) alertsCount.textContent = priceAlerts.length;
        } catch (e) {
            console.error("Failed to load price alerts count:", e);
            if (alertsCount) alertsCount.textContent = '0';
        }
    }
    
    // Initialize profile page
    function initProfilePage() {
        loadUserProfile();
        loadWishlistCount();
        loadPriceAlertsCount();
        
        // Set up logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    try {
                        // Get access token
                        const accessToken = sessionStorage.getItem('accessToken');
                        if (accessToken) {
                            // Call logout API endpoint
                            await fetch(API.logout, {
                                method: 'POST',
                                headers: {
                                    'Authorization': `Bearer ${accessToken}`
                                }
                            });
                        }
                    } catch (error) {
                        console.error('Logout API call failed:', error);
                    } finally {
                        // Clear session storage
                        sessionStorage.clear();
                        // Redirect to home page
                        window.location.href = 'index.html';
                    }
                }
            });
        }
    }
    
    // Initialize the page
    initProfilePage();
    
    // Initialize password change functionality
    initPasswordChange();
    
    // Initialize personal info update functionality
    initPersonalInfoUpdate();
});

// Initializes password change functionality for account settings
function initPasswordChange() {
    // Check if we're on the account settings page
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (!changePasswordForm) return;
    
    // Password toggle functionality
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const inputId = this.getAttribute('data-target') || this.parentElement.querySelector('input').id;
            const input = document.getElementById(inputId);
            const eyeIcon = this.querySelector('i') || document.getElementById(`${inputId}-eye`);
            
            if (input && eyeIcon) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                eyeIcon.className = `fas ${isPassword ? 'fa-eye-slash' : 'fa-eye'}`;
            }
        });
    });
    
    // Password strength validation
    const newPasswordInput = document.getElementById('newPassword');
    if (newPasswordInput) {
        newPasswordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }
    
    // Form submission
    changePasswordForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;
        
        // Validate password requirements
        if (!validatePasswordRequirements(newPassword)) {
            showNotification('Password does not meet all requirements.', 'error');
            return;
        }
        
        // Check if passwords match
        if (newPassword !== confirmNewPassword) {
            showNotification('New password and confirmation do not match.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = changePasswordForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Updating...';
        submitBtn.disabled = true;
        
        try {
            const accessToken = sessionStorage.getItem('accessToken');
            if (!accessToken) {
                throw new Error('You must be logged in to change your password.');
            }
            
            const response = await fetch(API.changePassword, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    previousPassword: currentPassword,
                    proposedPassword: newPassword
                })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to change password.');
            }
            
            // Success
            showNotification('Password changed successfully!', 'success');
            changePasswordForm.reset();
            
            // Reset password strength indicators
            document.querySelectorAll('.strength-item').forEach(item => {
                item.classList.remove('valid');
                const icon = item.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-times';
                }
            });
            
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Validates if a password meets all requirements
function validatePasswordRequirements(password) {
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return hasLength && hasUpper && hasNumber && hasSpecial;
}

// Updates password strength indicators based on password content
function checkPasswordStrength(password) {
    const lengthCheck = document.getElementById('length-check');
    const upperCheck = document.getElementById('upper-check');
    const numberCheck = document.getElementById('number-check');
    const specialCheck = document.getElementById('special-check');
    
    // Check length requirement
    updateRequirementStatus(lengthCheck, password.length >= 8);
    
    // Check uppercase requirement
    updateRequirementStatus(upperCheck, /[A-Z]/.test(password));
    
    // Check number requirement
    updateRequirementStatus(numberCheck, /\d/.test(password));
    
    // Check special character requirement
    updateRequirementStatus(specialCheck, /[!@#$%^&*(),.?":{}|<>]/.test(password));
}

// Updates a requirement status indicator
function updateRequirementStatus(element, isValid) {
    if (!element) return;
    
    const icon = element.querySelector('i');
    if (!icon) return;
    
    if (isValid) {
        element.classList.add('valid');
        icon.className = 'fas fa-check';
    } else {
        element.classList.remove('valid');
        icon.className = 'fas fa-times';
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
    
    // Auto-remove after 10 seconds (increased from 5 seconds)
    setTimeout(() => {
        notification.remove();
    }, 10000);
}

// Initializes personal information update functionality
function initPersonalInfoUpdate() {
    // Check if we're on the personal info page
    const personalInfoForm = document.getElementById('personalInfoForm');
    if (!personalInfoForm) return;
    
    // Load user data into form
    loadUserDataIntoForm();
    
    // Handle form submission
    personalInfoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
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
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    given_name: firstName,
                    family_name: lastName
                    // Email is not updated as it's typically the user identifier
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