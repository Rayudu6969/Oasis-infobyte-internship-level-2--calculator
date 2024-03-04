let input = document.getElementById('input');
// Backspace
function back() {
    input.value = input.value.slice(0, -1);
}
// All clear
function ac(){
    input.value = " ";
}
// Brackets
let bracketSwitch = false;
function brackets(){
    var prac;
    if(!bracketSwitch){
        prac = "("
    } else {
        prac = ")"
    };
    bracketSwitch = !bracketSwitch;
    document.getElementById("input").value+=prac;
}
// plusminus
let operatorSwitch = false;
function plusminus(){
    var prac;
    if(!operatorSwitch){
        prac = "+"
    } else {
        prac = "-"
    };
    operatorSwitch = !operatorSwitch;
    document.getElementById("input").value+=prac;
}
// dot
function dot(){
    var d=document.getElementById("input").value;
    if(d.length - 1){
        d="0.";
        document.getElementById("input").value+=d;
    }
    else{
        d=".";
        document.getElementById("input").value+=d;
    }
}
// append
function append(value) {
    input.value += value;
}
// calculate
function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert('Invalid input');
    }
}
