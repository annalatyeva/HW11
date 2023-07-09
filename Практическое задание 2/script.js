
function squareNumber () {
    let number = document.querySelector('.number');
    let square = (+number.value)**2;
    document.querySelector('.square').value = square;
}
squareNumber ();