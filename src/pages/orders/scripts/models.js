import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default class Checkout {
    #orders; // приватное свойство, сожержит массив продуктов которые заказал пользователь
    #checkoutTime; // приватное свойство, сожержит дату произведения заказа
    #restaurant; // приватное свойство, сожержит наименование ресторана в котором произведён заказ

    constructor(obj) {
        this.#orders = obj.orders;  
        this.#checkoutTime = obj.checkout;
        this.#restaurant = obj.restaurant;
        this.ifOrderFinished = this.getCheckoutTime() < 0 ? true : false;
    }

    getRestaurant() {
        return this.#restaurant;
    }

    getCheckoutTime() {
        return (((new Date(this.#checkoutTime).getTime() + 60 * 60 * 1000) - Date.now()) / 1000 / 60).toFixed(0);
    }

    getFormattedDate() {
        return format(
            new Date(this.#checkoutTime), 
            'd MMMM yyyy', 
            {locale: ru}
        );
    }

    getFormattedTime() {
        return format(new Date(this.#checkoutTime), 'HH:mm a');
    }

    getOrders() {
        return this.#orders;
    }

    getCheckoutTimePercent() {
        let timePercent = 100 - (Number(this.getCheckoutTime()) * 100) / 60;
        return timePercent <= 100 ? timePercent = timePercent.toFixed(2) : timePercent = 100;
    }
}