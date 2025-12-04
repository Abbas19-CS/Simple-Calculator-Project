const input = document.getElementById('inputbox');
let expression = '';

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') press(e.target.innerText);
});

document.addEventListener('keydown', (e) => {
    if ('0123456789+-*/.%'.includes(e.key)) press(e.key);
    if (e.key === 'Enter') press('=');
    if (e.key === 'Backspace') press('DEL');
    if (e.key === 'Escape' || e.key === 'Delete') press('AC');
    if (e.key >= '0' && e.key <= '9' || '+-*/.%'.includes(e.key)) e.preventDefault(); // prevent scrolling
});

function press(key) {
    if (key === '=') {
        try {
            expression = eval(expression) + '';
        } catch {
            expression = 'Error';
        }
    }
    else if (key === 'AC') expression = '';
    else if (key === 'DEL') expression = expression.slice(0, -1);
    else expression += key;

    input.value = expression || '0';
}