const cartIcon = document.querySelector('.icon-button.icon-button--orange');
const cartBlock = document.querySelector('#drawer');

export function cartOpen(list) {
    cartIcon.onclick = () => {
        list();
        cartBlock.classList.add('visible');
    };
}

