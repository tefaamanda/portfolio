function manipularFrutas() { 
    var frutas = document.getElementById('mercadoria').value.split(','); 
    document.getElementById('mercadoria').innerText = frutas[1]; 
    frutas.push('maçã, ovos e macarrão instantâneo');
    document.getElementById('listaatualizada').innerText = frutas.join(', ');
}  

document.getElementById('btnlista').addEventListener('click', manipularFrutas);
