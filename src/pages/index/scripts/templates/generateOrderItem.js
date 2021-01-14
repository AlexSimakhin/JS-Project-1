export const generateOrderItem = (obj) => `
    <div class="order__item order-item">
        <img class="order-item__image" src="${obj.img}" alt="">
        <span class="order-item__quantity">${obj.getCount()} X</span>
        <div class="order-item__info">
            <h3 class="order-item__title h3">${obj.title}</h3>
            <div class="order-item__price">${obj.price} грн</div>
        </div>
        <button class="icon-button icon-button--red"><img src="img/icons/delete.svg" alt=""></button>
    </div>
`; // Разметка товар/-ов при клике на "Корзину"