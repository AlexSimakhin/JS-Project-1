export default class Dish {
    #count = null;

    constructor(obj) {
        this.id = obj.id;
        this.price = obj.price;
        this.title = obj.title;
        this.img = obj.img;
        this.#count = obj.count;
    }

    setCount(count, machineInput) {
        if (machineInput) {
            this.#count += count;
        } else {
            if (typeof count !== 'number' || count < 0) {
                throw new Error(`Не валидное значение.`);
            }

            this.#count += count;
        }
    }

    getCount() {
        return this.#count;
    }
}