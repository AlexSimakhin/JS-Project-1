import { showPreviousList } from './showPreviousList.js';

export const generatePreviousOrders = (obj) => `
<div class="previous__item previous-item">
    <div class="previous-item__header">
        <h4 class="h4">${obj.getRestaurant()}</h4>
        <div class="badge badge--green">Выполнен</div>
    </div>

    <div class="previous-item-info">
        <div class="previous-item-info__date">${obj.getFormattedDate()}</div>
        <div class="previous-item-info__time">${obj.getFormattedTime()}</div>
    </div>

    <ul class="previous-item-dishes">
        ${showPreviousList(obj)}
    </ul>
</div>
`;