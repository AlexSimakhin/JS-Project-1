import { generatePreviousListItems } from './generatePreviousListItems.js';

export const showPreviousList = (obj) => {
    let list = '';
    obj.getOrders().map((value => { list += generatePreviousListItems(value);}));
    return list;
};