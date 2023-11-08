export default function InitdataLoad() {
    if (window.location.pathname.endsWith('/dashboard.html')) {
        document.addEventListener('DOMContentLoaded', function () {
            function exibirDataAtual() {
                var dataAtual = new Date();
                var dataFormatada = dataAtual.toLocaleDateString();
                document.getElementById("data-atual1").textContent = dataFormatada;
                document.getElementById("data-atual2").textContent = dataFormatada;
            }

            function exibirHoraAtual() {
                function atualizarHora() {
                    var horaAtual = new Date();
                    var horaFormatada = horaAtual.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    document.getElementById("hora-atual1").textContent = horaFormatada
                    document.getElementById("hora-atual2").textContent = horaFormatada
                }

                atualizarHora();

                setInterval(atualizarHora, 1000);
            }

            exibirDataAtual();
            exibirHoraAtual();
        });
    }
}