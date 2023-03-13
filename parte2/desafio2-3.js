/*A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através da justiça, multas para a Oil Corp caso eles não comecem a tratar todas as formas que estão poluindo a região. Além de realizar protocolos de reflorestamento e cuidados com a fauna e a flora do vale, respeitando a natureza.

As atividades que demandam tratamento e atenção são: Reflorestamento, Esgoto Tratado, Emissão de Carbono e Energia Sustentável. Para cada uma delas existem três critério: Não feito, Em progresso e Feito. O que não foi feito deve receber multa, o que está em progresso avaliação de progresso e o que está feito não multar.

Crie um código que analise cada uma dessas atividades e print no console o que deverá ser feito.

Nosso amigo e CleanCoder Felipão nos ajudou com um pedaço do código. Ele criou a Arrow Function findItem. O que ela faz é criar um filtro para encontrar as chaves no nosso objeto. Podemos notar que os parâmetros dela não estão exatamente ao lado como uma função normal: function exemplo(parametros), mas funciona exatamente do mesmo jeito.

A utilização dela é feita da mesma forma: findItem(objeto, index). Porém isso irá nos retornar a chave. Para termos o valor da chave precisamos fazer dessa forma: list[findItem(objeto, index)].*/

let arr = gets().split(", ");

const list = {
  Reflorestamento: gets(),
  EsgotoTratado: gets(),
  EmissaoDeCarbono: gets(),
  EnergiaSustentavel: gets(),
};

const findItem = (object, index) =>
  Object.keys(object).filter((item) => item.toString() == index);

function verificaResultado() {
  for (let i = 0; i < arr.length; i++) {
    let getItem = findItem(list, arr[i]);
    let resultado = list[getItem];
    if (resultado == "Feito") {
      print("Não multar");
    }
    if (resultado == "Não feito") {
      print("Multa");
    }
    if (resultado == "Em progresso") {
      print("Avaliação de progresso");
    }
  }
}

verificaResultado();
