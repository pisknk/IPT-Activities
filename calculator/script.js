function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var input = document.getElementById('display').value.trim();
    if (input === "9/11") {
        $('#myModal').modal('show');
        return;
    }
    else if (input === "9+10") {
        $('#videoModal').modal('show');
        return;
    }

    try {
        document.getElementById('display').value = eval(input);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
