let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest () {
    let result = 0; /* спочатку правильних відновідей 0*/ 
    
    let a1 = document.getElementById("q1").value;
    if (a1 === "2") {
        result++; /* result + 1*/
    }

    let a2 = document.getElementById("q2").value;
    if (a2 === "4") {
        result++; 
    }

    let a3 = document.getElementById("q3").value;
    if (a3 === "6") {
        result++; 
    }

    let a4 = document.getElementById("q4").value;
    if (a4 === "2") {
        result++; 
    }

    let a5 = document.getElementById("q5").value;
    if (a5 === "2") {
        result++; 
    }

    alert("кількість правильних відповідей:" + result);  
}
   