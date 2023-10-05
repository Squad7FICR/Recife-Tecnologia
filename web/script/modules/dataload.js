
function exibirDataAtual() {

    var dataAtual = new Date();
  
    var dataFormatada = dataAtual.toLocaleDateString();

    document.getElementById("data-atual").textContent = dataFormatada;
}


function exibirHoraAtual(){
    function atualizarHora() {
        var horaAtual = new Date();
        var horaFormatada = horaAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById("hora-atual").textContent = horaFormatada
    }

    atualizarHora();

    setInterval(atualizarHora, 1000);
}

window.onload = function() {
    exibirDataAtual();
    exibirHoraAtual();
};