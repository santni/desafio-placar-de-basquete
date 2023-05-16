
var timeA = 0
var timeB = 0;
var timeAf = 0;
var timeBf = 0;
let i = 1;

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
    document.getElementById("quarto" + i + "a").innerHTML = timeA;
    document.getElementById("quarto" + i + "b").innerHTML = timeB;
    i++;

    timeAf += timeA;
    timeBf += timeB;
    
    timeA = 0;
    timeB = 0;
}

