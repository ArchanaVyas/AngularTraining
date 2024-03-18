// Create a TODO list functionality with DOM Manipulation methods considering below points :
// - we can add items
// - we can remove items
// - we can change stylings of any item
// - try to cover DOM manipulation methods as much as you can
// - you can add your creativity to make it more functional

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        showPopupNotification('Please Enter a Task First');
    }
    else{
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = 'x';
        list.appendChild(span);
        showPopupNotification('Task Added Successfully');
    }
    inputBox.value = '';
    // saveData();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        // saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        // saveData()
        showPopupNotification('A Task was Removed');
    }
}, false);

// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem('data');
// }
showTask();

function showPopupNotification(message) {
    const popupNotification = document.getElementById('popup-notification');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popupNotification.classList.add('show');
    setTimeout(function() {
        popupNotification.classList.remove('show');
    }, 3000); // Close the notification after 3 seconds
}
