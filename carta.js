const detallesBtn = document.querySelector(".detalles-boton");
const menosBtn = document.querySelector(".mostrar-menos");
const carta = document.querySelector(".carta");
const detallesMenos = document.querySelector(".menos");
const detallesMas = document.querySelector(".detalles");
const arriba = document.querySelector(".cursoprofe");

detallesBtn.addEventListener("click", () => {
  carta.style.height = "450px";
  detallesMenos.style.display = "none";
  detallesMas.style.display = "flex";
  arriba.style.height = "12%";
});
menosBtn.addEventListener("click", () => {
  carta.style.height = "200px";
  detallesMenos.style.display = "flex";
  detallesMas.style.display = "none";
  arriba.style.height = "27%";
});
