/* Crie um algoritmo de pagamento em que se cadastre os prestadores de serviço, pegando os seguintes dados: 
nome comppleto, um número do PIS/PASEP, o valor da sua hora trabalhada  a quantidade de horas trabalhadas de 5 a 50 pessoas,
No fim dos cadastros deve-se mostrar os dados, o valor bruto do serviço e o liquido descontado na página html dos cadastrados.*/

let colaboradores = [];

function CadastrosdeFuncionários() {
    let nome = prompt("Informe seu nome completo:");
    while (!nome || nome.length < 2 || nome.indexOf(" ") === -1) {
        alert("Por favor, insira seu nome completo (com pelo menos um sobrenome).");
        nome = prompt("Informe seu nome completo:");
    }

    let pisPasep = prompt("Insira o número do PIS/PASEP:");
    while (isNaN(pisPasep) || pisPasep.trim() === "") {
        alert("Inválido. Digite um número válido.");
        pisPasep = prompt("Insira o número do PIS/PASEP:");
    }

    let valorHora = parseFloat(prompt("Informe o valor da hora trabalhada:"));
    while (isNaN(valorHora)) {
        alert("Valor da hora inválido. Tente novamente.");
        valorHora = parseFloat(prompt("Informe o valor da hora trabalhada:"));
    }

    let horasTrabalhadas = parseInt(prompt("Informe a quantidade entre 20 a 200 de horas trabalhadas:"));
    while (isNaN(horasTrabalhadas) || horasTrabalhadas < 20 || horasTrabalhadas > 200) {
        alert("Horas trabalhadas inválidas. Deve estar entre 20 e 200. Tente novamente.");
        horasTrabalhadas = parseInt(prompt("Informe a quantidade entre 20 a 200 de horas trabalhadas:"));
    }
    let funcionario = {
        nome,
        pisPasep,
        valorHora,
        horasTrabalhadas,
        calcularPagamento() {
            return this.valorHora * this.horasTrabalhadas;
        },
        calcularPagamentoLiquido() {
            return this.calcularPagamento() * 0.9; 
        }
    };
    colaboradores.push(funcionario);
    alert("Cadastrado com sucesso!");
}
function exibirResultados() {
    if (colaboradores.length > 0) {
        let resultados = "Prestadores Cadastrados:\n";
        colaboradores.forEach(p => {
            resultados += `${p.nome} (PIS: ${p.pisPasep}) - Bruto: R$ ${p.calcularPagamento().toFixed(2)}, Líquido: R$ ${p.calcularPagamentoLiquido().toFixed(2)}\n`;
        });
        alert(resultados);
    } else {
        alert("Nenhum prestador cadastrado.");
    }
}
CadastrosdeFuncionários();
exibirResultados();




