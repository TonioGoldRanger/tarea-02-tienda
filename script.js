const actualizarTotal = () => {
    let total = 0;
    document.querySelectorAll(".box").forEach(box => {
      const precio = parseFloat(box.dataset.precio);
      const cantidad = parseInt(box.querySelector(".cantidad").value);
      total += precio * cantidad;
    });
    document.getElementById("total").value = total;
  };
  
  document.querySelectorAll(".box").forEach(box => {
    const input = box.querySelector(".cantidad");
    const sumar = box.querySelector(".sumar");
    const restar = box.querySelector(".restar");
    const stock = parseInt(box.dataset.stock);
  
    sumar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      if (valor < stock) {
        input.value = valor + 1;
        actualizarTotal();
      } else {
        alert("No puedes agregar más de la cantidad disponible.");
      }
    });
  
    restar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      if (valor > 0) {
        input.value = valor - 1;
        actualizarTotal();
      }
    });
  });
  