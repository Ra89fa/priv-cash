// src/public/js/main.js

function avaliar() {
    // Captura o valor do saldo no botão
    let saldoAtual = parseFloat(document.querySelector('.btn-saldo').textContent.replace('Saldo: R$', '').trim());
    let valorPorAvaliacao = 2.00; // Defina o valor por avaliação

    saldoAtual += valorPorAvaliacao; // Atualiza o saldo

    // Atualiza o botão de saldo com o novo valor
    document.querySelector('.btn-saldo').textContent = 'Saldo: R$ ' + saldoAtual.toFixed(2);
}
