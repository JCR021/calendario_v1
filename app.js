const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, index) => {
button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    button.classList.add('active');
    tabContents[index].classList.add('active');
});
});

const messageInputs = document.querySelectorAll('.message-input input');
const messageSubmits = document.querySelectorAll('.message-submit');
const days = document.querySelectorAll('.day');

let messages = {};

messageInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        messages[days[index].dataset.day] = input.value;
    });
});

messageSubmits.forEach((submit, index) => {
    submit.addEventListener('click', () => {
        console.log(`Message for day ${days[index].dataset.day}: ${messages[days[index].dataset.day]}`);
    });
});