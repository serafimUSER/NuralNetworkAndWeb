document.getElementById('inp1').onblur = function() {
    if (document.getElementById('inp1').value == "") {
        document.getElementById('lab1').style.top = "50%";
        document.getElementById('lab1').style.transform = "translateY(-50%)"
        document.getElementById('lab1').style.fontSize = "19px"
    }
}

document.getElementById('inp1').onfocus = function() {
    document.getElementById('lab1').style.top = "-10px";
    document.getElementById('lab1').style.transform = "translateY(-60%)"
    document.getElementById('lab1').style.fontSize = "14px"
}


document.getElementById('inp2').onblur = function() {
    if (document.getElementById('inp2').value == "") {
        document.getElementById('lab2').style.top = "50%";
        document.getElementById('lab2').style.transform = "translateY(-50%)"
        document.getElementById('lab2').style.fontSize = "19px"
    }
}

document.getElementById('inp2').onfocus = function() {
    document.getElementById('lab2').style.top = "-10px";
    document.getElementById('lab2').style.transform = "translateY(-60%)"
    document.getElementById('lab2').style.fontSize = "14px"
}

document.getElementById('inp2_0').onblur = function() {
    if (document.getElementById('inp2_0').value == "") {
        document.getElementById('lab2_0').style.top = "55%";
        document.getElementById('lab2_0').style.transform = "translateY(-50%)"
        document.getElementById('lab2_0').style.fontSize = "19px"
    }
}

document.getElementById('inp2_0').onfocus = function() {
    document.getElementById('lab2_0').style.top = "44%";
    document.getElementById('lab2_0').style.transform = "translateY(-60%)"
    document.getElementById('lab2_0').style.fontSize = "14px"
}