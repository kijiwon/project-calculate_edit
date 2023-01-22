const body = document.querySelector('body');
const display = document.querySelector('.output');
const calculator = document.querySelector('.container');
const buttons = calculator.querySelector('.cal-btns');
const switch_mode = document.querySelector('.switch-mode');
const start_btn = document.getElementById('start-cal')
const close_btn = document.getElementById('close-btn')
const startBox = document.querySelector('.start');
// 왜 동작을 안해,,ㅜ -> .을 넣지 말아야지!
// 버튼 이벤트 넣기
function startCal (){
    startBox.classList.add('hide');
    calculator.classList.remove('hide');
}
function closeCal(){
    startBox.classList.remove('hide');
    calculator.classList.add('hide');
}
start_btn.addEventListener('click',startCal);
close_btn.addEventListener('click',closeCal);

// 다크모드 / 라이트모드
switch_mode.onclick = function(){
    body.classList.toggle('dark');
}