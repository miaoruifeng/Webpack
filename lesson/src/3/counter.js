function counter() {
    var counter = document.createElement('div');
    counter.innerHTML = 1;
    counter.setAttribute('id', 'counter');
    counter.onclick = function() {
        counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
    }
    document.body.appendChild(counter);
}

export default counter;