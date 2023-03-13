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

for (let i = 0; i < arr.length; i++) {
  qualMolecula = arr[i].find(function (item) {
    return item === "CO2";
  });

  if (qualMolecula) {
    break;
  }
}

if (qualMolecula != undefined) {
  console.log(`Filtro específico para a molécula ${qualMolecula}`);
} else {
  console.log("Filtro Simples");
}
