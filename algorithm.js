function verify() {
    console.log("a, b, x")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    console.log(a, b, c)

    let low, high
    if (a < b) {
        low = a;
        high = b;
    }
    else {
        low = b;
        high = a;
    }

    if (c >= low && c <= high) {
        result = " X принадлежит заданному промежутку"
        document.getElementById("result").innerText =  result;
    } else {
        result = " X не принадлежит заданному промежутку"
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("x");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
