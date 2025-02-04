function calcularMult() { 
    var primeironum = document.getElementById('primeironum').value 
    var segundonum = document.getElementById('segundonum').value 
    var mult = parseInt(primeironum) * parseInt(segundonum) 
    document.getElementById('resultadom').innerText = mult 
} 
document.getElementById('btncalcularm').addEventListener('click', calcularMult) 