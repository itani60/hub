// Price Alert Modal Styles
document.head.insertAdjacentHTML('beforeend', `
<style>
    /* Price Alert Modal Styles */
    .price-alert-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow-y: auto;
    }
    
    .price-alert-modal.active {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }
    
    .price-alert-container {
        position: relative;
        background-color: #fff;
        margin: 30px auto;
        width: 90%;
        max-width: 500px;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(0);
        transition: transform 0.3s ease;
        overflow: hidden;
        animation: modalFadeIn 0.3s ease;
    }
    
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .price-alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 25px;
        background: linear-gradient(135deg, #ff3a3a 0%, #ff5252 100%);
        color: white;
        position: relative;
    }
    
    .price-alert-title {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: white;
    }
    
    .price-alert-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .price-alert-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: rotate(90deg);
    }
    
    .price-alert-content {
        padding: 25px;
    }
    
    .price-alert-product {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }
    
    .price-alert-product-image {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden;
        background: #f9f9f9;
        padding: 5px;
    }
    
    .price-alert-product-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .price-alert-product-info {
        flex: 1;
    }
    
    .price-alert-product-title {
        font-size: 16px;
        font-weight: 600;
        color: #333;
        margin: 0 0 5px 0;
    }
    
    .price-alert-product-price {
        font-size: 18px;
        font-weight: 700;
        color: #ff3a3a;
    }
    
    .price-alert-form-group {
        margin-bottom: 20px;
    }
    
    .price-alert-form-group label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
        font-size: 15px;
    }
    
    .price-alert-input-container {
        position: relative;
        margin: 20px 0;
    }
    
    .price-alert-currency {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-weight: bold;
        color: #333;
    }
    
    .price-alert-input {
        width: 100%;
        padding: 14px 14px 14px 30px;
        border: 2px solid #e1e5e9;
        border-radius: 10px;
        font-size: 15px;
        transition: all 0.3s ease;
        background-color: #f9f9f9;
    }
    
    .price-alert-input:focus {
        outline: none;
        border-color: #ff3a3a;
        background-color: #fff;
        box-shadow: 0 0 0 3px rgba(255, 58, 58, 0.1);
    }
    
    .price-alert-actions {
        display: flex;
        gap: 15px;
    }
    
    .price-alert-btn {
        flex: 1;
        padding: 14px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
    }
    
    .price-alert-btn.primary {
        background: linear-gradient(135deg, #ff3a3a 0%, #ff5252 100%);
        color: white;
        border: none;
        box-shadow: 0 4px 15px rgba(255, 58, 58, 0.3);
    }
    
    .price-alert-btn.primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(255, 58, 58, 0.4);
    }
    
    .price-alert-btn.secondary {
        background: white;
        color: #666;
        border: 2px solid #e1e5e9;
    }
    
    .price-alert-btn.secondary:hover {
        background: #f9f9f9;
        border-color: #ccc;
    }
    
    /* Product Card Price Alert Bell */
    .product-card .price-alert-bell {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
        color: #ff3a3a;
        background: rgba(255, 255, 255, 1);
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: transform 0.2s ease;
        pointer-events: auto;
        border: 2px solid #ff3a3a;
        opacity: 1 !important;
        visibility: visible !important;
    }
    
    .product-card .price-alert-bell:hover {
        transform: scale(1.15);
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .product-card .price-alert-bell.active {
        color: #ff3a3a;
        animation: bell-pulse 2s infinite;
        background-color: #fff0f0;
    }
    
    @keyframes bell-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }
</style>
`);

// Create price alert modal HTML if it doesn't exist
function ensurePriceAlertModalExists() {
    if (!document.getElementById('priceAlertModal')) {
        const modalHTML = `
        <div class="price-alert-modal" id="priceAlertModal">
            <div class="price-alert-container">
                <div class="price-alert-header">
                    <h2 class="price-alert-title">Set Price Alert</h2>
                    <button class="price-alert-close" id="priceAlertModalClose">&times;</button>
                </div>
                <div class="price-alert-content">
                    <div class="price-alert-product">
                        <div class="price-alert-product-image">
                            <img id="priceAlertProductImage" src="" alt="Product Image">
                        </div>
                        <div class="price-alert-product-info">
                            <h3 class="price-alert-product-title" id="priceAlertProductTitle"></h3>
                            <div class="price-alert-product-price" id="priceAlertProductPrice"></div>
                        </div>
                    </div>
                    
                    <form id="priceAlertForm">
                        <div class="price-alert-form-group">
                            <label for="alertPrice">Alert me when price drops below:</label>
                            <div class="price-alert-input-container">
                                <span class="price-alert-currency">R</span>
                                <input type="number" id="alertPrice" class="price-alert-input" min="1">
                            </div>
                        </div>
                        
                        <div class="price-alert-form-group">
                            <label for="alertEmail">Email for notifications (optional):</label>
                            <input type="email" id="alertEmail" class="price-alert-input" placeholder="Enter your email address">
                        </div>
                        
                        <div class="price-alert-actions">
                            <button type="button" class="price-alert-btn secondary" id="cancelPriceAlert">Cancel</button>
                            <button type="button" id="savePriceAlert" class="price-alert-btn primary">Set Alert</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

// Price Alert Functions
function getPriceAlerts() {
    const savedAlerts = localStorage.getItem('priceAlerts');
    if (savedAlerts) {
        try {
            return JSON.parse(savedAlerts);
        } catch (e) {
            console.error('Error parsing price alerts:', e);
            return [];
        }
    }
    return [];
}

function savePriceAlerts(alerts) {
    localStorage.setItem('priceAlerts', JSON.stringify(alerts));
}

function togglePriceAlert(productId, currentPrice, productName, productImage) {
    const alerts = getPriceAlerts();
    const existingAlertIndex = alerts.findIndex(alert => alert.productId === productId);
    
    if (existingAlertIndex >= 0) {
        // Remove existing alert
        alerts.splice(existingAlertIndex, 1);
        showNotification('Price Alert Removed', `Price alert for ${productName} has been removed.`, 'info');
        
        // Update UI
        const bellIcon = document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`);
        if (bellIcon) {
            bellIcon.classList.remove('active');
        }
    } else {
        // Show price alert modal
        showPriceAlertModal(productId, currentPrice, productName, productImage);
    }
    
    savePriceAlerts(alerts);
}

function showPriceAlertModal(productId, currentPrice, productName, productImage) {
    // Ensure modal exists
    ensurePriceAlertModalExists();
    
    // Set modal content
    document.getElementById('priceAlertProductTitle').textContent = productName;
    document.getElementById('priceAlertProductPrice').textContent = `R${currentPrice.toLocaleString()}`;
    document.getElementById('priceAlertProductImage').src = productImage;
    document.getElementById('alertPrice').value = Math.floor(currentPrice * 0.9);
    document.getElementById('alertPrice').max = currentPrice - 1;
    
    // Show modal
    const modal = document.getElementById('priceAlertModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add event listeners
    document.getElementById('priceAlertModalClose').addEventListener('click', closePriceAlertModal);
    document.getElementById('cancelPriceAlert').addEventListener('click', closePriceAlertModal);
    document.getElementById('savePriceAlert').addEventListener('click', function() {
        savePriceAlertSettings(productId, currentPrice, productName, productImage);
    });
}

function closePriceAlertModal() {
    const modal = document.getElementById('priceAlertModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function savePriceAlertSettings(productId, currentPrice, productName, productImage) {
    const alertPrice = parseFloat(document.getElementById('alertPrice').value);
    const alertEmail = document.getElementById('alertEmail').value;
    
    if (isNaN(alertPrice) || alertPrice >= currentPrice || alertPrice <= 0) {
        showNotification('Invalid Price', 'Please enter a valid price below the current price.', 'error');
        return;
    }
    
    // Save the alert
    const alerts = getPriceAlerts();
    alerts.push({
        productId,
        productName,
        currentPrice,
        alertPrice,
        email: alertEmail,
        dateCreated: new Date().toISOString()
    });
    savePriceAlerts(alerts);
    
    // Update UI
    const bellIcon = document.querySelector(`.price-alert-bell[data-product-id="${productId}"]`);
    if (bellIcon) {
        bellIcon.classList.add('active');
    }
    
    // Show confirmation
    showNotification('Price Alert Set', `We'll notify you when ${productName} drops below R${alertPrice.toLocaleString()}.`, 'success');
    
    // Close modal
    closePriceAlertModal();
}

// Helper function to show notifications
function showNotification(title, message, type = 'info') {
    // Check if notification container exists
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon;
    switch(type) {
        case 'success': icon = 'fas fa-check-circle'; break;
        case 'error': icon = 'fas fa-exclamation-circle'; break;
        case 'warning': icon = 'fas fa-exclamation-triangle'; break;
        case 'info': icon = 'fas fa-info-circle'; break;
        default: icon = 'fas fa-bell';
    }
    
    notification.innerHTML = `
        <div class="notification-header">
            <div class="notification-title">
                <i class="${icon}"></i>
                ${title}
            </div>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="notification-body">
            <p class="notification-message">${message}</p>
        </div>
        <div class="notification-progress"></div>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Trigger show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds (except for errors)
    if (type !== 'error') {
        const duration = 5000;
        const progressBar = notification.querySelector('.notification-progress');
        let width = 100;
        const interval = setInterval(() => {
            width -= 100 / (duration / 100);
            progressBar.style.width = width + '%';
            if (width <= 0) {
                clearInterval(interval);
                closeNotification(notification.querySelector('.notification-close'));
            }
        }, 100);
    }
}

// Close notification function
function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.classList.add('hiding');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Initialize price alert bells when DOM is loaded
function initializePriceAlerts() {
    // Add price alert bells to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Check if card already has a price alert bell
        if (!card.querySelector('.price-alert-bell')) {
            const productId = card.getAttribute('data-product-id');
            const productPriceElement = card.querySelector('.current-price');
            
            if (productId && productPriceElement) {
                const productPrice = parseFloat(productPriceElement.textContent.replace(/[^0-9.]/g, ''));
                
                // Create bell icon
                const bellIcon = document.createElement('div');
                bellIcon.className = 'price-alert-bell';
                bellIcon.setAttribute('data-product-id', productId);
                bellIcon.setAttribute('data-product-price', productPrice);
                bellIcon.innerHTML = '<i class="fas fa-bell"></i>';
                
                // Add click event
                bellIcon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const productName = card.querySelector('.product-name').textContent;
                    const productImageElement = card.querySelector('.product-image img');
                    const productImage = productImageElement ? productImageElement.src : '';
                    
                    togglePriceAlert(productId, productPrice, productName, productImage);
                });
                
                // Check if this product already has an alert set
                const alerts = getPriceAlerts();
                const hasAlert = alerts.some(alert => alert.productId === productId);
                
                // Update bell appearance based on alert status
                if (hasAlert) {
                    bellIcon.classList.add('active');
                }
                
                // Add to card
                card.appendChild(bellIcon);
            }
        }
    });
}

// Make functions available globally
window.togglePriceAlert = togglePriceAlert;
window.showPriceAlertModal = showPriceAlertModal;
window.closePriceAlertModal = closePriceAlertModal;
window.savePriceAlertSettings = savePriceAlertSettings;
window.showNotification = showNotification;
window.closeNotification = closeNotification;
window.initializePriceAlerts = initializePriceAlerts;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    ensurePriceAlertModalExists();
    initializePriceAlerts();
});