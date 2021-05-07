const form  = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

loadItems();

eventListener();

function eventListener() {
    //submit event
    form.addEventListener('submit', addNewItem);
    //eleman silme
    taskList.addEventListener('click',deleteItem);
    //tüm elemanları silme
    btnDeleteAll.addEventListener('click',deleteAllItems);
    
    const date = new Date();
    document.getElementById("tarih").innerHTML = date;
}

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items=[];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
    

}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item,index){
    if (item === text) {
        items.splice(index,1);
    }
});
    localStorage.setItem('items',JSON.stringify(items));

}
function createItem(text) {
    //li elemanı oluşturma
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondry';
    li.appendChild(document.createTextNode(text));

    //a elemanı oluşturma
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    if(text === ""){
        removeEventListener();
    }
    //li elemanı ekleme
    li.appendChild(a);

    // ul'nin içine li ekleme
    taskList.appendChild(li);
}
//Item ekleme fonksiyonu
function addNewItem(e) {
    //boş inputu submit etmeye çalışırken devreye girer
    if(input.value === ''){
        alert('eleman gir!');
        e.preventDefault();
    }
    //eleman oluşturma
    createItem(input.value);

    setItemToLS(input.value);
//eleman eklendikten sonra inpuru clear eder
    input.value='';

    e.preventDefault();
}

//item silme
function deleteItem(e) {
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();

        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
}
    e.preventDefault();
}
//tüm itemleri silme
function deleteAllItems(e) {
    
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();
    
e.preventDefault();
}
