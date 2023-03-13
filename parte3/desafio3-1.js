/*Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria da Oil Corp convidaram vocês para os ajudarem a preservar a natureza e a serem uma empresa sustentável. Para isso, eles precisam de ajuda para criar o algoritmo que direciona os resíduos da água para a estação de tratamento correta antes de ser descartada no rio Jacará-Mirim.

Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, as que possuem até 10 caracteres passam pelo Filtro Específico e as que possuem mais que 10 caracteres passam pelo Filtro Duplo Especifico. Essas moléculas estão misturadas nos resíduos, se houver ao menos uma que tenha o número específico de caracteres esse resíduo já deve passar pelo filtro correto.

Crie um código que implemente essas regras e imprima o filtro adequado para cada molécula:

<= 5 - Imprimir "Filtro Normal";
> 5 e <= 10 - Imprimir "Filtro Específico";
> 10 - Imprimir "Filtro Duplo Específico";*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(", ");
let qualFiltro = 0;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada

let quantidadeCaracteres = [];

while (qualFiltro <= arr.length - 1) {
  let tamanho = arr[qualFiltro].length;
  quantidadeCaracteres.push(tamanho);
  qualFiltro++;
}

let max = quantidadeCaracteres.reduce(function (a, b) {
  return Math.max(a, b);
});

if (max <= 5) {
  print("O filtro deve ser: Filtro Normal");
} else if (max < 10) {
  print("O filtro deve ser: Filtro Específico");
} else {
  print("O filtro deve ser: Filtro Duplo Específico");
}
