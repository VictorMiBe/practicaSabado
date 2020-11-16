const screen = document.getElementById('calculator-screen');
const keys = document.getElementById('calculator-keys');

const calculator = () => {
    if (!keys) return;
    keys.addEventListener('click', e => {
        console.log(e);
    });
}

calculator();