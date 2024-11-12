function verify() {
    console.log("a, b, x")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    let low, high
    if (a < b) { low = a; high = b; }
    else { low = b; high = a; }

    if (c >= low && c <= high) {
        result = "X принадлежит заданному промежутку"
        check = true;
    }
    else {
        result = "X не принадлежит заданному промежутку"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        document.getElementById("UserEnter").submit();
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("x");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
