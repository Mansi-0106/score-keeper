
var p1button = document.querySelector('#p1button');
var p2button = document.querySelector('#p2button');
var p2display = document.querySelector('#p2display');
var p1display = document.querySelector('#p1display');
var resetbutton = document.querySelector('#reset');
var winscoreselect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningscore = 3;
let isgameover = false;


p1button.addEventListener('click', function () {
    if (!isgameover) {
        p1score += 1;

        if (p1score === winningscore) {
            isgameover = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1display.textContent = p1score;
    }
})
p2button.addEventListener('click', function () {
    if (!isgameover) {
        p2score += 1;

        if (p2score === winningscore) {
            isgameover = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2display.textContent = p2score;
    }
})
resetbutton.addEventListener('click', reset)
function reset() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'loser');
    p2display.classList.remove('winner', 'loser');
    p1button.disabled = false;
    p2button.disabled = false;

}
winscoreselect.addEventListener("change", function () {
    winningscore = parseInt(this.value);
    reset();
})