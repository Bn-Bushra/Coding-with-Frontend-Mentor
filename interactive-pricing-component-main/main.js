var isDiscountActive = false;
function toggleDiscount() {
    isDiscountActive =!isDiscountActive;
    updateToggleState();
    updatePrice();
}

function updateToggleState() {
    var toggleButton = document.getElementById('discountToggle');
    var toggleContainer = document.querySelector('.toggle-discount');
    var discountText = document.getElementById('discountText');
    
    if (isDiscountActive) {
        toggleButton.classList.add('active');
        toggleContainer.classList.add('active');
        discountText.style.display = 'inline-block';
    } else {
        toggleButton.classList.remove('active');
        toggleContainer.classList.remove('active');
        discountText.style.display = 'none';
    }
}

// toggle button code

function toggleSwitch(){
    var toggleSwitch = document.querySelector('.toggle-discount');
    toggleSwitch.classList.toggle('active');
}

// update price when toggle button is pressed

function updatePrice(){
    const slider = document.getElementById('price-slider');
    const pageviews = document.getElementById('pageviews');
    const price = document.getElementById('main-price');

    var views = ["10K","50k", "100k", "500k", "1m"];
    var prices = [8.00, 12.00, 16.00, 24.00, 36.00];
    var discount = isDiscountActive ? 0.75 : 1;
    

    var index = slider.value - 1;

    var discountPrice = prices[index] * discount;

    pageviews.textContent = views[index] + " pageviews";
    price.textContent = "$" + discountPrice.toFixed(2);
}
