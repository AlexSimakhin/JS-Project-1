export const generateMenu = (obj) => `
    <div id="dish-${obj.id}" class="dish">
        <img class="dish__image" src="${obj.img}" alt="">
        <div class="dish__title">${obj.title}</div>
        <div class="dish__info">
            <div class="dish__price">${obj.price} грн</div>
            <div class="counter">
                <button style="display: none;" data-id="${obj.id}" class="counter__button counter__button--decrease"></button>
                <span class="counter__number">${obj.getCount()}</span>
                <button data-id="${obj.id}" class="counter__button counter__button--increase"></button>
            </div>
        </div>
    </div>
`; // Разметка карточки товара