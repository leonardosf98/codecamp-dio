let lista1 = ["HCl", "HCN", "O2", "CO"];
let lista2 = ["Br2", "NH3"];
let lista3 = ["CO2", "OH"];

let arr = [lista1, lista2, lista3];

let quimicos = ["NO2", "SO2", "CO", "FHO"];

let qualFiltro = false;
let qualMolecula;

function verificaQuimico(item) {
  for (let i = 0; i < quimicos.length; i++) {
    if (item === quimicos[i]) {
      qualMolecula = item;
    }
  }
}

let j = 0;
while (arr.length > j) {
  j++;
  qualMolecula = arr[j].find(function (item) {
    if (item === "CO") {
      return (qualMolecula = item);
    }
  });
  if ((qualMolecula = !undefined)) {
    break;
  }
}

if (qualMolecula != undefined) {
  console.log(`Filtro específico para a molécula ${qualMolecula}`);
} else {
  console.log("Filtro Simples");
}
