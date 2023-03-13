/*Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, árvore fundamental para a magia do vale. Para isso, é necessário plantá-los a uma certa distância um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que algumas não se desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um do outro, assim conseguiremos plantar todas as mudas e evitar que algumas não se desenvolvam.

Crie um código que, com as entradas de distancias dos buracos avaliadas pelo drone, verifique se o espaço entre um buraco e outro é igual a 10 metros. Se for, imprima no console "Plantar!". Se não for, imprima no console a distância que o buraco deve retroceder ou avançar para chegar ao número ideal.

Para esse desafio os métodos Math do Javascript podem ser muito úteis.*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//TODO: Print no console se a semente deve ser plantada ou se o buraco deve
//avançar ou retroceder X metros
let index = 0;
let resto = ((id % 10) - 10) * -1;
let resto2 = id - 10;

if (id - index == 10) {
  print("Plantar!");
} else if (id - index > 10) {
  print(`O buraco deve retroceder ${resto2} metros`);
} else if (id - index < 9) {
  print(`O buraco deve avançar ${resto} metros`);
} else if (id == 9) {
  print("O buraco deve avançar 1 metro");
} else if (id == 11) {
  print("O buraco deve retroceder 1 metro");
} else {
  print("Insira um número válido");
}
