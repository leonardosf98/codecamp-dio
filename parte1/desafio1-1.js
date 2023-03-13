/*Buscando planejar as ações para conter a Oil Corp, um acampamento foi criado e muitos CleanCoders (inclusive novos adeptos da causa) estão chegando. Com isso, para faciliar a comunicação e interação, precisamos imprimir cartões de identificação para todas as pessoas.

Crie um código que com três entradas (NOME, SOBRENOME e ID) que imprima essas informações no seguinte padrão: "Nome: NOME SOBRENOME ID: ID"

Venilton, um CleanCoder experiente, compartilhou uma dica bem útil. Ele disse que é possível utilizar o conceito de interpolação de strings para facilitar a impressão de textos concatenados à variáveis. Para utilizar basta fazer assim:

print(`String e ${variavel}`);*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let nome = gets();
let sobrenome = gets();
let id = parseInt(gets());

//TODO: Print no console as três variáveis de acordo com a saída esperada

print(`Nome: ${nome} ${sobrenome} ID: ${id}`);
