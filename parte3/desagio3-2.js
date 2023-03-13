/*A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.

Durante a extração os gases saem misturados. Crie um código que, de acordo com a lista, verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá passar por um Filtro Simples. Se houver, imprima no console que deverá passar por um Filtro Especial e especifique qual gás.*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(", ");
let lista2 = gets().split(", ");
let lista3 = gets().split(", ");

let arr = [lista1, lista2, lista3];

let qualFiltro = false;
let qualMolecula;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste.

let quimicos = ["NO2", "SO2", "CO", "FHO"];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < quimicos.length; j++)
    arr[i].find(function (item) {
      if (item === quimicos[j]) {
        qualMolecula = item;
      }
    });

  if (qualMolecula) {
    break;
  }
}

if (qualMolecula != undefined) {
  print(`Filtro Específico para a Molécula ${qualMolecula}`);
} else {
  print("Filtro Simples");
}
