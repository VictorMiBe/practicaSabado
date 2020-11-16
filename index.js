function eval(a) {
    if (a == 'C') {
        screen.innerHTML = '0';
    }
}


let screen = document.querySelector('.screen');
let btn = document.querySelectorAll('.button');
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        screen.innerHTML += btn.innerHTML
        eval(btn.innerHTML);
    });
});