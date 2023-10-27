let num1 = 0, num2 = 0;
let count = 0;
let Acount = 0, Bcount = 0;
function rollers() {
    if (Acount == 1 || Bcount == 1) {
        const num = Math.floor(Math.random() * 6 + 1);
        count++;


        return num;
    } else {
        alert(" wrong Play");
    }
}
function roller1() {
    Acount++;
    num1 = rollers();
    const link = "assist/imgs/dice-" + num1 + ".png";


    document.getElementById("dice").innerHTML = `
    <img src="${link}" alt="" >
    `;
    document.querySelector('.score').innerHTML = "score:" + num1;
    if (Acount == 1) {
        if (count == 2) {
            result();
        }
    }
}
function roller2() {
    Bcount++;
    num2 = rollers();
    const link = "assist/imgs/dice-" + num2 + ".png";

    document.getElementById("dice2").innerHTML = `
    <img src="${link}" alt="" >
    `;
    document.querySelector('.score2').innerHTML = "score:" + num2;
    if (Bcount == 1) {
        if (count == 2) {
            result();
        }
    }
}
function result() {
    count = 0;
    Acount = 0;
    Bcount = 0;
    if (num1 < num2) {
        document.querySelector('h1').innerHTML = "Win B";
    } else if (num1 == num2) {
        document.querySelector('h1').innerHTML = "Match Drow";
    } else {
        document.querySelector('h1').innerHTML = "Win A";

    }
}