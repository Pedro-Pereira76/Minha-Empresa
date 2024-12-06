// Gráfico de Satisfação do Cliente
document.addEventListener("DOMContentLoaded", function () {
    var ctxSatisfacao = document.getElementById('satisfacaoChart').getContext('2d');
    var satisfacaoChart = new Chart(ctxSatisfacao, {
        type: 'pie',
        data: {
            labels: ['Satisfeito', 'Neutro', 'Insatisfeito'],
            datasets: [{
                data: [70, 20, 10],  // Exemplo de porcentagens de feedbacks
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Gráfico de Crescimento Mensal
    var ctxCrescimento = document.getElementById('crescimentoChart').getContext('2d');
    var crescimentoChart = new Chart(ctxCrescimento, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Clientes Atendidos',
                data: [40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 1
            }, {
                label: 'Lucro Mensal (R$)',
                data: [4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500],
                backgroundColor: '#28a745',
                borderColor: '#218838',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Agendamento de Serviços
document.getElementById('form-agendamento').addEventListener('submit', function (event) {
    event.preventDefault();

    var nomeCliente = document.getElementById('nome-cliente').value;
    var dataServico = document.getElementById('data-servico').value;
    var tipoServico = document.getElementById('tipo-servico').value;

    var agendamento = {
        nomeCliente: nomeCliente,
        dataServico: dataServico,
        tipoServico: tipoServico
    };

    var agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    atualizarListaAgendamentos();
});

// Atualiza a lista de agendamentos
function atualizarListaAgendamentos() {
    var agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    var listaAgendamentos = document.getElementById('lista-agendamentos');
    listaAgendamentos.innerHTML = '';

    agendamentos.forEach(function (agendamento) {
        var li = document.createElement('li');
        li.textContent = `${agendamento.nomeCliente} - ${agendamento.dataServico} - ${agendamento.tipoServico}`;
        listaAgendamentos.appendChild(li);
    });
}

// Feedback dos Clientes
document.getElementById('form-feedback').addEventListener('submit', function (event) {
    event.preventDefault();

    var texto = document.getElementById('feedback-texto').value;
    var avaliacao = document.getElementById('feedback-avaliacao').value;

    var feedback = {
        texto: texto,
        avaliacao: avaliacao
    };

    var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    atualizarListaFeedbacks();
});

// Atualiza a lista de feedbacks
function atualizarListaFeedbacks() {
    var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    var listaFeedbacks = document.getElementById('lista-feedbacks');
    listaFeedbacks.innerHTML = '';

    feedbacks.forEach(function (feedback) {
        var li = document.createElement('li');
        li.textContent = `${feedback.texto} - Avaliação: ${feedback.avaliacao}`;
        listaFeedbacks.appendChild(li);
    });
}

// Carregar dados armazenados
document.addEventListener('DOMContentLoaded', function () {
    atualizarListaAgendamentos();
    atualizarListaFeedbacks();
});
