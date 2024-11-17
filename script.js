const notificatinAmount = document.getElementById('notificatin-amount');
const markEvent = document.getElementById('mark-event');
const itemsMessages = document.querySelectorAll('.newOne');
const pointSigns = document.querySelectorAll('.point-sign');
let notificatin = 3;


markEvent.onclick = () => {
    itemsMessages.forEach(item => {
        trrigerActive(item);
        decreaseAmount();
    });
    pointSigns.forEach(item => {
        trrigerActive(item);
    });
}

itemsMessages.forEach((item, index) => {
    item.onclick = () => {
        trrigerActive(item);
        trrigerActive(pointSigns[index]);
        decreaseAmount();
    }
});


const trrigerActive = (item) => {
    item.classList.remove('active');
    item.classList.add('active');
};

const decreaseAmount = () => {
    notificatin--;
    notificatinAmount.textContent = notificatin;
    if (notificatin <= 0) {
         trrigerActive(notificatinAmount);
    }
};

 