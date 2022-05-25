let num = 0;

// é necessario realmente repetir ou existe alguma outra forma ?

mostrar()

function mostrar(){
  const numero = document.getElementById("numero");
  const template = `<p> ${num} <p>`;
  numero.innerHTML = template;
};

let aumenta = () => {
  num++;
  mostrar();
};

let diminui = () => {
  num--;
  mostrar();
};

let zerar = () => {
  num = 0;
  mostrar();
};
