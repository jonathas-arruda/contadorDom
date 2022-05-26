let num = 0;

window.onload = function() {
  mostrar()
};

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
