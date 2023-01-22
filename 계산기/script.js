const body = document.querySelector('body');
const display = document.querySelector('.output');
const calculator = document.querySelector('.container');
const buttons = calculator.querySelector('.cal-btns');
const switch_mode = document.querySelector('.switch-mode');
const start_btn = document.getElementById('start-cal')
const close_btn = document.getElementById('close-btn')
const startBox = document.querySelector('.start');
let firstNum, operator, previousKey, previousNum;
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
// 계산 구현하기
function calculate(n1, operator, n2){
    let result = 0;
    if(operator === '+'){
        result = Number(n1) + Number(n2);
    }
    if(operator === '-'){
        result = Number(n1) - Number(n2);
    }
    if(operator === 'x'){
        result = Number(n1) * Number(n2);
    }
    if(operator === '/'){
        result = Number(n1) / Number(n2);
    }
    if(operator === '^'){
        result = Math.pow(Number(n1),Number(n2));
    }
    if(operator === '%'){
        result = Number(n1)/100;
    }
    return String(result);
}
// 버튼 클릭 이벤트
buttons.addEventListener('click', function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보
    const buttonContainerArray = buttons.children;
    console.dir(event);

});
