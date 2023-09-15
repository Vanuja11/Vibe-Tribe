function toggle() {
    var blurpage = document.getElementById('blurpage');
    blurpage.classList.toggle('active');
    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');
}

function toggle2() {
    var blurpage = document.getElementById('blurpage');
    blurpage.classList.toggle('active');
    var popup1 = document.getElementById('popup2');
    popup1.classList.toggle('active');
}

function toggle3() {
    var blurpage = document.getElementById('blurpage');
    blurpage.classList.toggle('active');
    var popup1 = document.getElementById('popup3');
    popup1.classList.toggle('active');
}

function toggle4() {
    var blurpage = document.getElementById('blurpage');
    blurpage.classList.toggle('active');
    var popup1 = document.getElementById('popup4');
    popup1.classList.toggle('active');
}

function toggle5() {
    var blurpage = document.getElementById('blurpage');
    blurpage.classList.toggle('active');
    var popup1 = document.getElementById('popup5');
    popup1.classList.toggle('active');
}

function myFunction()
{   
    document.body.style.backgroundColor= "lightyellow";
}
function myFunction2()
{   
    document.body.style.backgroundColor= "white";
}
function myFunction3()
{   
    document.body.style.backgroundColor= "lightblue";
}
function myFunction4()
{   
    document.body.style.fontSize= "15px";
}
function myFunction5()
{   
    document.body.style.fontSize= "20px";
}
function myFunction6()
{   
    document.body.style.fontSize= "30px";
}
function myFunction7()
{   
    document.body.style.webkitTextFillColor= "Red";
}
function myFunction8()
{   
    document.body.style.webkitTextFillColor= "Fuchsia";
}
function myFunction9()
{   
    document.body.style.webkitTextFillColor= "green";
}

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.backgroundColor = bgColor;
}
function random_color2() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.webkitTextFillColor = bgColor;
}