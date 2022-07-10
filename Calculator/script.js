function dis(val) {
    document.getElementById("result").value += val;
}
//this function inputs the number/operator typed as outlined in the HTML. adds whatever is clicked to the end. i.e. 3+ then clicking 3 again will input 3 onto the end.

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
} //This piece of code calculates the displayed function when = is clicked. Would like to add a line that says "Error" if a number is divided by 0

function clr() {
    document.getElementById("result").value = "";
} //This function clears the input text.

function bsp() {
    let str = document.getElementById("result").value;
    let strMin1 = str.slice(0, -1);
    document.getElementById("result").value = strMin1;
} //This function backspaces the last digit.
