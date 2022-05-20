export function renderItem(item) {
    const li = document.createElement('li');

    li.textContent = `${item.qty} ${item.name}`;

    return li;
}