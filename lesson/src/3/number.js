function number() {
    var number = document.createElement('div');
    number.setAttribute('id', 'number');
    number.innerHTML = 1000;
    document.body.appendChild(number);
}

export default number;