function one(time) {
    if (time == 'timeA') {
        timeA += 1;
    } else {
        timeB += 1;
    }
}

function two(time) {
    if (time == 'timeA') {
        timeA += 2;
    } else {
        timeB += 2;
    }
}

function tree(time) {
    if (time == 'timeA') {
        timeA += 3;
    } else {
        timeB += 3;
    }
}

function diminuir(time) {
    if (time == 'timeA') {
        timeA -= 1;
        if (timeA < 0) {
            return timeA = 0;
        }
    } else {
        timeB -= 1;
        if (timeB < 0) {
            return timeB = 0;
        }
    }
}

function encerrar() {
   
        document.getElementById("quarto1").innerHTML = timeA;

        document.getElementById("quarto2").innerHTML = timeB;
    
    timeA = 0;
    timeB = 0;
}




var timeA = 0;
var timeB = 0;