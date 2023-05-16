var pontoA;
var pontoB;

console.log(pontoA);
var timeA = 0
var timeB = 0;
var timeAf = 0;
var timeBf = 0;
let i = 1;

function one(time) {
    if (time == 'timeA') {
        timeA += 1;
        pontoA = Number(document.getElementById("num1").innerHTML);
        pontoA += 1;
        document.getElementById("num1").innerHTML = pontoA;
    } else {
        timeB += 1;
        pontoB = Number(document.getElementById("num2").innerHTML);
        pontoB += 1;
        document.getElementById("num2").innerHTML = pontoB;
    }
}

function two(time) {
    if (time == 'timeA') {
        timeA += 2;
        pontoA = Number(document.getElementById("num1").innerHTML);
        pontoA += 2;
        document.getElementById("num1").innerHTML = pontoA;
    } else {
        timeB += 2;
        pontoB = Number(document.getElementById("num2").innerHTML);
        pontoB += 2;
        document.getElementById("num2").innerHTML = pontoB;
    }
}

function tree(time) {
    if (time == 'timeA') {
        timeA += 3;
        pontoA = Number(document.getElementById("num1").innerHTML);
        pontoA += 3;
        document.getElementById("num1").innerHTML = pontoA;
    } else {
        timeB += 3;
        pontoB = Number(document.getElementById("num2").innerHTML);
        pontoB += 3;
        document.getElementById("num2").innerHTML = pontoB;
    }
}

function diminuir(time) {
    if (time == 'timeA') {
        timeA -= 1;
        pontoA = Number(document.getElementById("num1").innerHTML);
        pontoA -= 1;
        document.getElementById("num1").innerHTML = pontoA;
        if (timeA < 0) {
            return timeA = 0;
        }
    } else {
        timeB -= 1;
        pontoB = Number(document.getElementById("num2").innerHTML);
        pontoB -= 1;
        document.getElementById("num2").innerHTML = pontoB;
        if (timeB < 0) {
            return timeB = 0;
        }
    }
}

function encerrar() {
    document.getElementById("quarto" + i + "a").innerHTML = `${i}º Quarto: ${timeA}`;
    document.getElementById("quarto" + i + "b").innerHTML = `${i}º Quarto: ${timeB}`;
    i++;

    timeAf += timeA;
    timeBf += timeB;


    
    timeA = 0;
    timeB = 0;
    if(i == 5) {
        if (pontoA > pontoB) {
            document.getElementById("win").innerHTML = "o vencedor é Lakers";
        } else {
            document.getElementById("win").innerHTML = "o vencedor é Warriors";
        }
        
    }

}




