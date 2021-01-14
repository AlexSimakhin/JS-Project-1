import '../../../styles/index.scss';

import Dish from './models.js';
import { generateMenu, generateOrderItem } from './templates';
import { cartOpen, cartClose, submitOrder } from './cart';

import dominosArray from './data/dominos.json';
import kfcArray from './data/kfc.json';
import macArray from './data/mac.json';

const featured = document.querySelector('.featured'); // Ссылка на Блок Рекомендаций (3 бренда)
const featuredItem = featured.querySelectorAll('.featured__item'); // Массив каждого бренда
const tabsContent = document.querySelector('.tabs__content'); // Ссылка на поле товаров
const iconButtonBadge = document.querySelector('.icon-button__badge'); // Ссылка на кол. товара в Корзине

// Корзина
const cartBlock = document.querySelector('#drawer');
const order = cartBlock.querySelector('.order');
const orderNameRestaurant = cartBlock.querySelector('#order-name-restaurant');
const orderSubmit = cartBlock.querySelector('#order-submit');
const spanDeliveryPrice = cartBlock.querySelector('#span-delivery-price');
const drawerSubtitle = cartBlock.querySelector('#drawer-subtitle');

const dominosMenu = dominosArray.map((item) => new Dish(item)); // Получаем в переменную экзмепляры товаров
const macMenu = macArray.map((item) => new Dish(item));
const kfcMenu = kfcArray.map((item) => new Dish(item));

export let currentMenu = null; // Переменная которая помогает понять, какое меню какого бренда была открыта/активирована
export let currentMenuName = null;

let featuredActiveBlock = null;


// Первая инициализация приложения (Запуск)
(function startApp() {
    tabsContent.innerHTML = null;

    featuredItem[0].classList.add('active');
    featuredActiveBlock = featured.firstElementChild;

    let list = '';

    for (const item of dominosMenu) {
        list += generateMenu(item);
    }

    currentMenu = dominosMenu;
    currentMenuName = `Domino’s Pizza`;

    tabsContent.insertAdjacentHTML('afterbegin', list);
})();


// "Выбор ресторана" Функция, которая подсвечивает выбраный и Функция для удаления прошлого активного ресторана
const featuredActive = (target) => {
    target.classList.add('active');
    featuredActiveBlock = target;
};

const featuredActiveRemove = () => {
    for (const item of featuredItem) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    }
};
// ---

// Возвращаем объект экзепляров, который был выбран пользователем
const targetMenu = (target) => {
    if (target.querySelector('h4').innerHTML === `Domino’s Pizza`) {
        currentMenuName = `Domino’s Pizza`;
        orderNameRestaurant.innerHTML = currentMenuName;

        return dominosMenu;
    }
    if (target.querySelector('h4').innerHTML === `McDonald’s`) {
        currentMenuName = `McDonald’s`;
        orderNameRestaurant.innerHTML = currentMenuName;

        return macMenu;
    }
    if (target.querySelector('h4').innerHTML === `KFC`) {
        currentMenuName = `KFC`;
        orderNameRestaurant.innerHTML = currentMenuName;

        return kfcMenu;
    }
}; // То что функция возврашает передаёться в showMenu


const showMenu = (menu) => {
    tabsContent.innerHTML = null;
    iconButtonBadge.innerHTML = 0;
    order.innerHTML = null;

    currentMenu = menu;

    let list = '';

    for (const item of menu) {
        list += generateMenu(item);
    }

    tabsContent.insertAdjacentHTML('afterbegin', list);

    updateOrders(menu);
}; // Динамически создает разметку продуктов


// При клике на блоке Рекомендаций, через всплытие находим ближайший элемент ("Ресторан")
featured.onclick = (e) => {
    e.preventDefault();
    featuredActiveRemove();

    let target = e.target.closest('a');
    if (target === null) return;

    featuredActive(target);

    let clickedMenu = targetMenu(target);
    showMenu(clickedMenu);
};


// Блок выбора кол. продуктов

// Уменьшаем у определенного товара кол.
const decreaseValue = (target) => {
    const targetId = Number(target.dataset.id);

    for (const item of currentMenu) {
        if (item.id === targetId) {
            item.setCount(-1, true);
            target.parentNode.querySelector('.counter__number').innerHTML = `${item.getCount()}`;
            if (item.getCount() === 0) {
                target.parentNode.querySelector('.counter__button--decrease').style.display = 'none';
            }
        }
    }
};

// Увеличиваем у определенного товара кол.
const increaseValue = (target) => {
    const targetId = Number(target.dataset.id);

    for (const item of currentMenu) {
        if (item.id === targetId) {
            item.setCount(1, true);
            target.parentNode.querySelector('.counter__number').innerHTML = `${item.getCount()}`;
            target.parentNode.querySelector('.counter__button--decrease').style.display = 'inherit';
        }
    }
};

// При клике, находим на какую кнопку пользователь счёлкнул и от этого, запускаем определённую функцию
tabsContent.onclick = (e) => {
    let target = e.target;
    if (!target.dataset.id) return;

    if (target.classList.value.includes('increase')) {
        increaseValue(target);
    }
    
    if (target.classList.value.includes('decrease')) {
        decreaseValue(target);
    }

    updateOrders(currentMenu);
}; // При клике на кнопки + или -

// Функция которая выполняется, после клика на + или -. И узнает, какое кол. блюд выбрано и в конце записывает значение в круглый значёк возле Корзины
const updateOrders = (menu) => {
    let currentCartValue = 0;

    for (const item of menu) {
        if (item.getCount() !== 0) {
            currentCartValue++;
        }
    }

    iconButtonBadge.innerHTML = currentCartValue;
    drawerSubtitle.innerHTML = `(${currentCartValue} наименования)`;
};


// Cart - Overlay
const orderList = () => {
    order.innerHTML = null;

    let objCostItem = deliveryCost();
    spanDeliveryPrice.innerHTML = objCostItem.html;

    let list = '';
    let orderSum = Number(0 + objCostItem.price);

    for (const item of currentMenu) {
        if (item.getCount() > 0) {
            list += generateOrderItem(item);

            orderSum += (item.price * item.getCount());
        }
    }

    order.insertAdjacentHTML('afterbegin', list);

    orderSubmit.childNodes[2].data = `(${orderSum} грн)`;
};


const deliveryCost = () => {
    if (featuredActiveBlock.querySelector('.badge').classList.value.includes('orange')) {
        return {
            price: 0,
            html: `бесплатная доставка`
        };
    }

    if (featuredActiveBlock.querySelector('.badge').dataset.deliveryPrice) {
        let price = featuredActiveBlock.querySelector('.badge').dataset.deliveryPrice;
        return {
            price: price,
            html: `${featuredActiveBlock.querySelector('.badge').dataset.deliveryPrice} грн`
        };
    }
};



cartOpen(orderList);
cartClose();
submitOrder();

