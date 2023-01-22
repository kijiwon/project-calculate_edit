
const display = document.querySelector('.output');
const calculator = document.querySelector('.container');
const buttons = calculator.querySelector('.cal-btns');
const switch_mode = document.querySelector('.switch-mode');
const start_btn = document.querySelector('#start-cal');
const close_btn = document.querySelector('.close-btn');
close_btn.onclick = function(){
    calculator.classList.add('.hide');
    start_btn.classList.remove('hide');
}
start_btn.onclick = function(){
    start_btn.classList.add('.hide');
    calculator.classList.remove('.hide');
}