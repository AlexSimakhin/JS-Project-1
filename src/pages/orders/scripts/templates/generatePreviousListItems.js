export const generatePreviousListItems = (item) => `
<li class="previous-item-dishes__item">
    <span class="previous-item-dishes__quantity">${item.count}</span>
    ${item.title}
</li>
`;