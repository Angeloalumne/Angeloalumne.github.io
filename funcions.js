function a() {
    document.getElementById('Space').innerHTML = document.getElementById('Intro').innerHTML;
}
function b() {
    document.getElementById('Space').innerHTML = document.getElementById('Index').innerHTML;
}
function c() {
    document.getElementById('Space').innerHTML = document.getElementById('DMDE').innerHTML;
}
function d() {
    document.getElementById('Space').innerHTML = document.getElementById('Funciones Básicas').innerHTML;
}
function e() {
    document.getElementById('Space').innerHTML = document.getElementById('Utilidades').innerHTML;
}
function f() {
    document.getElementById('Space').innerHTML = document.getElementById('Funcionamiento1').innerHTML;
}
function g() {
    document.getElementById('Space').innerHTML = document.getElementById('Funcionamiento2').innerHTML;
}
function h() {
    document.getElementById('Space').innerHTML = document.getElementById('Funcionamiento3').innerHTML;
}
function i() {
    document.getElementById('Space').innerHTML = document.getElementById('Funcionamiento4').innerHTML;
}
function j() {
    document.getElementById('Space').innerHTML = document.getElementById('Alternativa1').innerHTML;
}
function k() {
    document.getElementById('Space').innerHTML = document.getElementById('Alternativa2').innerHTML;
}
function l() {
    document.getElementById('Space').innerHTML = document.getElementById('Alternativa3').innerHTML;
}
function m() {
    document.getElementById('Space').innerHTML = document.getElementById('Alternativa4').innerHTML;
}
function n() {
    document.getElementById('Space').innerHTML = document.getElementById('Alternativa5').innerHTML;
}
function o() {
    document.getElementById('Space').innerHTML = document.getElementById('Opinion').innerHTML;
}
function p() {
    document.getElementById('Space').innerHTML = document.getElementById('Final').innerHTML;
}
function Colorines1() {
    var colores = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('Contingut').style.backgroundColor = colorAleatorio;
}

setInterval(Colorines1, 100); 

function Colorines2() {
    var colores = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('Capcalera').style.backgroundColor = colorAleatorio;
}

setInterval(Colorines2, 100); 

function Colorines3() {
    var colores = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('Peu').style.backgroundColor = colorAleatorio;
}

setInterval(Colorines3, 100); 

function Colorines4() {
    var colores = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 255)'];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('Menu').style.backgroundColor = colorAleatorio;
}

setInterval(Colorines4, 100); 