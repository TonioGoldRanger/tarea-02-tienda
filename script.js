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
  const stockElement = box.querySelector(".stock-disponible");
  let stock = parseInt(box.dataset.stock);

  if (stock === 0) {
    sumar.disabled = true;
  }

  sumar.addEventListener("click", () => {
    let valor = parseInt(input.value);
    if (valor < stock) {
      input.value = valor + 1;
      actualizarTotal();
      stockElement.textContent = stock - (valor + 1);
    } else {
      alert("No puedes agregar más de la cantidad disponible.");
    }
  });

  restar.addEventListener("click", () => {
    let valor = parseInt(input.value);
    if (valor > 0) {
      input.value = valor - 1;
      actualizarTotal();
      stockElement.textContent = stock - (valor - 1);
    }
  });
});

document.getElementById("comprar").addEventListener("click", function (e) {
  const total = parseFloat(document.getElementById("total").value);

  if (isNaN(total) || total === 0) {
    e.preventDefault();
    alert("No se ha seleccionado ningún producto para comprar.");
  } else {
    alert("¡Gracias por tu compra!");

    document.querySelectorAll(".box").forEach(box => {
      const input = box.querySelector(".cantidad");
      const cantidadSeleccionada = parseInt(input.value);
      let stockDisponible = parseInt(box.dataset.stock);

      if (cantidadSeleccionada > 0) {
        let nuevoStock = stockDisponible - cantidadSeleccionada;
        box.dataset.stock = nuevoStock;

        const stockVisual = box.querySelector(".stock-disponible");
        if (stockVisual) {
          stockVisual.textContent = nuevoStock;
        }

        if (nuevoStock === 0) {
          box.querySelector(".sumar").disabled = true;
        }
      }

      input.value = 0;
    });

    actualizarTotal();
  }
});
