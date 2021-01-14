import '../../../styles/index.scss';

import Checkout from './models.js';
import { generateActiveOrders, generatePreviousOrders } from './templates';

import { cartOpen } from '../../index/scripts/cart/cartOpen.js';
import { cartClose } from '../../index/scripts/cart/cartClose.js';

const activeOrders = document.querySelector('#active-orders');
const previousOrders = document.querySelector('#previous-orders');

// Для дальнейшего написания логики
// const order = document.querySelector('.order');
// const orderNameRestaurant = cartBlock.querySelector('#order-name-restaurant');
// const orderSubmit = cartBlock.querySelector('#order-submit');
// const spanDeliveryPrice = cartBlock.querySelector('#span-delivery-price');
// const drawerSubtitle = cartBlock.querySelector('#drawer-subtitle');


let listOrder = localStorage['orderOutput'] === undefined ? new Array() : JSON.parse(localStorage.getItem('orderOutput'));

try {
    listOrder.forEach(item => {
        if (item.orders) {
            if (item.orders.id < 1 || item.orders.price < 1 || item.orders.count < 1) {
                throw new Error('Не валидное значени.');
            }

            item.orders.forEach(value => {
                if (value.title.length <= 5 && value.title.length >= 30) {
                    throw new Error('Не валидное значение.');
                }
            });
            
        }
    
        if (item.checkout) {
            let dateOrderMils = Date.parse(item.checkout);
    
            if (isNaN(dateOrderMils)) {
                throw new Error('Не валидная дата.');
            }
    
            let date = new Date(dateOrderMils);
    
            if (!(date instanceof Date)) {
                throw new Error('Не валидная дата.');
            }
    
            if (item.restaurant) {
                if (typeof item.restaurant !== 'string') {
                    throw new Error('Не валидное значение.');
                }
    
                let restaurantList = ['Domino’s Pizza', 'McDonald’s', 'KFC'];
    
                if (item.restaurant !== restaurantList[0] &&
                    item.restaurant !== restaurantList[1] &&
                    item.restaurant !== restaurantList[2]) {
                    throw new Error('Не валидное название ресторана.');
                }
            }
        }
    });
    
} catch (error) {
    console.log(error.message);
}

// Массив заказов
const orders = listOrder.map((item) => new Checkout(item));


(function showingOrders() {
    activeOrders.innerHTML = null;
    previousOrders.innerHTML = null;

    let listActive = '';
    let listPrevious = '';

    for (const item of orders) {
        if (!item.ifOrderFinished) {
            listActive += generateActiveOrders(item);
        } else {
            listPrevious += generatePreviousOrders(item);
        }
    }

    activeOrders.insertAdjacentHTML('afterbegin', listActive);
    previousOrders.insertAdjacentHTML('afterbegin', listPrevious);
})();


const orderList = () => { // To do,
    /*order.innerHTML = null;

    let list = `
    <div>
        <p>Сделайте новый заказ +</p>
    </div>
    `;

    order.insertAdjacentHTML('afterbegin', list);*/
};

cartOpen(orderList);
cartClose();