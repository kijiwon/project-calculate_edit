const body = document.querySelector('body');
// 계산 구현 
const display = document.querySelector('.output');
const calculator = document.querySelector('.container');
const buttons = calculator.querySelector('.cal-btns');
let firstNum, operator, previousKey, previousNum;
// 시작/닫기 이벤트구현
const switch_mode = document.querySelector('.switch-mode');
const start_btn = document.getElementById('start-cal')
const close_btn = document.getElementById('close-btn')
const startBox = document.querySelector('.start');

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
    // n1은 n2의 몇 퍼센트인지 계산
    if(operator === '%'){
        result = (Number(n1)/Number(n2))*100;
        result = `${result}%`
    }
    return String(result);
}
// 버튼 클릭 이벤트
buttons.addEventListener('click', function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보
    const buttonContainerArray = buttons.children;
    // console.dir(event);
    if(target.matches('button')){
        for(let i=0; i<buttonContainerArray.length; i++){
            const childrenArray = buttonContainerArray[i].children;
            for(let j=0; j<childrenArray.length; j++){
                childrenArray[j].classList.remove('isPressed');
            }
        }
        if(action === 'number'){
            if(display.textContent==='0' || previousKey === 'operator' || previousKey === 'calculate'){
                display.textContent = buttonContent;
            } else {
                display.textContent = display.textContent + buttonContent;
            }
            previousKey = 'number';
        }
        if (action === 'oper') {
            target.classList.add('isPressed');
            if (firstNum && operator && previousKey !== 'operator' && previousKey !== 'calculate') {
              display.textContent = calculate(firstNum, operator, display.textContent);
            }
            firstNum = display.textContent;
            operator = buttonContent;
            previousKey = 'operator';
        }
        if (action === 'decimal') {
            if (!display.textContent.includes('.') && previousKey !== 'operator') {
              display.textContent = display.textContent + '.';
            } else if (previousKey === 'operator') {
              display.textContent = '0.';
            }
            previousKey = 'decimal';
        }
        if (action === 'clear') {
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            previousKey = 'clear';
            display.textContent = '0';
        }
        if (action === 'cal') {
            if (firstNum) {
              if (previousKey === 'calculate') {
                display.textContent = calculate(display.textContent, operator, previousNum);
              } else {
                previousNum = display.textContent;
                display.textContent = calculate(firstNum, operator, display.textContent);
              }
            }
            previousKey = 'calculate';
        }
    }
});
