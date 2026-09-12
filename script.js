let cartCount = 0;
const badge = document.querySelector('.badge');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        badge.textContent = cartCount;
        button.textContent = "تمت الإضافة ✓";
        button.style.backgroundColor = "#ffb703";
        button.style.color = "#121212";
        
        setTimeout(() => {
            button.textContent = "أضف للسلة";
            button.style.backgroundColor = "transparent";
            button.style.color = "#ffb703";
        }, 1500);
    });
});