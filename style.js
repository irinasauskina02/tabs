const menuItem  = document.querySelectorAll('.menu-item'),
    listItem = document.querySelectorAll('ul.item li');    

function removeClassActive(array) {
    array.forEach( im => {
        im.classList.remove('active');
    });
}
menuItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        removeClassActive(menuItem);
        removeClassActive(listItem);
        item.classList.add('active');
        listItem[i].classList.add('active');
    });
});    