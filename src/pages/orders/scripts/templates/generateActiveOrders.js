export const generateActiveOrders = (obj) => `
<div class="coming-up__item coming-up-item">
    <div class="coming-up-item__header">
        <h4 class="h4">${obj.getRestaurant()}</h4>
        <div class="badge badge--orange">Доставка</div>
    </div>

    <div class="coming-up-info">
        <img src="img/icons/clock.svg" alt="">
        <div class="coming-up-info__content">
            <div>Заказ будет доставлен через</div>
            <div class="coming-up-info__title">${obj.getCheckoutTime()} мин</div>
        </div>
    </div>

    <div class="progress-bar">
        <div class="progress-bar__line" style="width: ${obj.getCheckoutTimePercent()}%"></div>
        <div class="progress-bar__overlay">
            <div class="progress-bar__item progress-bar__item--first"></div>
            <div class="progress-bar__item progress-bar__item--sec"></div>
            <div class="progress-bar__item progress-bar__item--third"></div>
        </div>
    </div>
</div>
`;