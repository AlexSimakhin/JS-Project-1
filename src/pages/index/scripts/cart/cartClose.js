const cartBlock = document.querySelector('#drawer');
const cartBlockClose = cartBlock.querySelector('#drawer-close');

export function cartClose() {
    cartBlockClose.onclick = () => {
        cartBlock.classList.remove('visible');
    };
}