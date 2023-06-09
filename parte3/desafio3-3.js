/*Vocês decidem que vão enviar projetos e ideias para a Oil Corp seguir sendo mais sustentável. Uma pessoa do seu grupo diz que vocês receberam um JSON com diversos funcionários da Oil Corp, e seus emails, e que vocês deveriam tentar enviar as ideias para esses endereços. Porém, vocês devem poupar esforços e enviar esses emails somente para cargos de liderança e diretoria.

Crie um código que, faça a analise do JSON procurando por cargos e emails válidos, e print no console o nome, o cargo e seu email válido.

Caso não o algoritmo não encontre nenhum cargo e emprego válido, print no console "Não existem registros encontrados".

OBS: Emails válidos são aqueles que possuem @oilcorp.com.br completo.*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let offset = parseInt(gets());
let limit = parseInt(gets());

const info = [
  {
    nome: "Caique Andrade",
    idade: 23,
    cargo: "Trainee",
    email: "caiqueandrade@hotmail.com",
    tempoDeEmpresa: "3 meses",
  },
  {
    nome: "Júlio Cesar",
    idade: 65,
    cargo: "Diretoria",
    email: "julio.cesar@oilcorp.com.br",
    tempoDeEmpresa: "44 anos",
  },
  {
    nome: "Enzo Gaben",
    idade: 25,
    cargo: "Auxiliar Administrativo",
    email: "enzogaben@oilcorp.com",
    tempoDeEmpresa: "1 ano",
  },
  {
    nome: "Lenite Longo",
    idade: 70,
    cargo: "Diretoria",
    email: "lenite@oilcorp.com.br",
    tempoDeEmpresa: "50 anos",
  },
  {
    nome: "Renan Oliveira",
    idade: 35,
    cargo: "Liderança",
    email: "renan@oilcorp.com",
    tempoDeEmpresa: "10 anos",
  },
  {
    nome: "Renato Linhares",
    idade: 32,
    cargo: "Liderança",
    email: "renatolinhares@oilcorp.com.br",
    tempoDeEmpresa: "5 anos",
  },
  {
    nome: "Emerson Junior",
    idade: 22,
    cargo: "Tech lead",
    email: "emersonjunior@oilcorp.com.br",
    tempoDeEmpresa: "5 anos",
  },
  {
    nome: "Igor Alves",
    idade: 26,
    cargo: "DBA",
    email: "igor.alves@hotmail.com",
    tempoDeEmpresa: "Terceirizado",
  },
  {
    nome: "Marcela Kawakame",
    idade: 28,
    cargo: "Liderança",
    email: "marcela@oilcorp.com.br",
    tempoDeEmpresa: "6 anos",
  },
  {
    nome: "Eric Velloso",
    idade: 29,
    cargo: "Diretoria",
    email: "e.velloso@oilcorp.com.br",
    tempoDeEmpresa: "11 anos",
  },
];
//primeira parte => aplicar offset e limit

const findItem = (object, index) =>
  Object.keys(object).filter((item) => item.toString() == index);

let arrayRaw = [];

for (let i = 0; i <= limit - offset; i++) {
  let resultado = info[findItem(info, offset + i)];
  if (resultado) {
    arrayRaw.push(resultado);
  }
}

//segunda parte => filtrar cargos de liderança

const lideres = arrayRaw.filter(filtraLider);

function filtraLider(value) {
  let emailTeste = value.email;
  let check = /^[\w.%+-]+@oilcorp\.com\.br$/.test(emailTeste);
  if (value.cargo == "Liderança" || value.cargo == "Diretoria") {
    if (check === true) {
      return value;
    }
  }
}

//terceira parte => mapear informações selecionadas

function mapearInformacao(lider) {
  return {
    nome: lider.nome,
    cargo: lider.cargo,
    email: lider.email,
  };
}

const lideresMapeados = lideres.map(mapearInformacao);

if (lideres.length === 0) {
  print("Não existem registros encontrados");
} else {
  lideresMapeados.forEach(function (lider) {
    print(`Nome: ${lider.nome}, Cargo: ${lider.cargo}, Email: ${lider.email}`);
  });
}
