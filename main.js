function calcularImpacto() {
    // Captura o número digitado pelo usuário
    const quantidadeAnimais = document.getElementById('animais').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples para não aceitar números vazios ou negativos
    if (quantidadeAnimais === "" |8| quantidadeAnimais <= 0) {
        resultadoDiv.innerHTML = ".";
        resultadoDiv.style.color = "#d32f2f";
        return;
    }

    // Cálculo fictício baseado em médias de biogás (1 animal gera energia para acender cerca de 3 lâmpadas LED comerciais na cidade)
    const lampadasAcesas = Math.round(quantidadeAnimais * 3.5);

    // Exibe a resposta na tela de forma amigável
    resultadoDiv.style.color = "#2e7d32";
    resultadoDiv.innerHTML = `
        🎉 <strong>Incrível!</strong><br>
        Com os resíduos orgânicos de <strong>${quantidadeAnimais}</strong> animais, 
        sua propriedade pode gerar biogás suficiente para manter cerca de 
        <strong>${lampadasAcesas} lâmpadas LED</strong> acesas na cidade durante um mês inteiro!
    `;
}
