import { currentMenu, currentMenuName } from '../index.js';

const orderSubmit = document.querySelector('#order-submit');

export function submitOrder() {
    orderSubmit.onclick = () => {
        const productList = currentMenu.filter(value => value.getCount() > 0).map(value => {
            return {
                'id': value.id,
                'price': value.price,
                'title': value.title,
                'count': value.getCount()
            };
        });
    
        let currentOrder = [{
            'restaurant': currentMenuName,
            'checkout': new Date().toISOString(),
            'orders': productList,
        }];

        let localStoragelistOrder = JSON.parse(localStorage.getItem('orderOutput'));
        localStoragelistOrder && localStoragelistOrder.map(value => currentOrder.push(value));

        localStorage.setItem('orderOutput', JSON.stringify(currentOrder));
    
        document.location = 'orders.html';
    };
}