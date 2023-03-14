let offset = 0;
let limit = 4;
let personFind = false;

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

const lideres = info.filter(filtraLider);

function filtraLider(value) {
  if (value.cargo == "Liderança" || value.cargo == "Diretoria") {
    return value;
  }
}
console.log(lideres);

/* 1- Método para devolver offset e limit
2-Verificar se é liderança ou diretoria Object filter
3- Retorno / não encontrado ou encontrado (personfind)
4- validar e-mail*/
