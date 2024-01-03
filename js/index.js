let listaDeTareas = [];

function showDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.remove("hidden");
  setTimeout(() => {
    dialog.classList.remove("opacity-0");
  }, 20);
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.add("opacity-0");
  setTimeout(() => {
    dialog.classList.add("hidden");
  }, 500);
}

const anadirTarea = async () => {
  var input = document.getElementById("inputTarea");
  var valor = input.value;

  let tarea = {
    id: (listaDeTareas.length + 1),
    descripcion: valor,
    activo: true,
  };

  if (valor === "") {
    Swal.fire("Error", "Ingrese un valor válido", "error");
  } else {
    listaDeTareas.push(tarea);
    localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
    Swal.fire("Añadida", "La tarea ha sido añadida", "success");
    hideDialog();
  }
  mostrarTareas();
};

const eliminarTarea = (tareaId) => {
  const tareaIndex = listaDeTareas.findIndex(tarea => tarea.id === tareaId);
  
  if (tareaIndex !== -1) {
    Swal.fire({
      title: "Confirmar",
      text: "¿Estás seguro de eliminar esta tarea?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        listaDeTareas.splice(tareaIndex, 1);
        localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
        mostrarTareas();
        Swal.fire("Eliminada", "La tarea ha sido eliminada", "success");
      }
    });
  } else {
    Swal.fire("Error", "Id no válido", "error");
  }
};

const editarTarea = (tareaId) => {
  if (tareaId >= 1 && tareaId <= listaDeTareas.length) {
    const tarea = listaDeTareas[tareaId - 1];
    // Aquí puedes realizar las modificaciones necesarias en la tarea
    tarea.activo = !tarea.activo;
  } else {
    console.log("Id no válido");
  }
  
  localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
  mostrarTareas();
};

const mostrarTareas = () => {
  const contenedorTareas = document.getElementById("contenedor-tareas");

  contenedorTareas.innerHTML = "";

  const listaDeTareasGuardadas = localStorage.getItem("listaDeTareas");

  if (listaDeTareasGuardadas) {
    listaDeTareas = JSON.parse(listaDeTareasGuardadas);
  }

  listaDeTareas.forEach((tarea) => {
    const article = document.createElement("article");
    article.classList.add(
      "w-3/4",
      "mt-10",
      "bg-purple-700",
      "shadow-purple-950",
      "rounded-full",
      "p-4",
      "flex",
      "flex-row",
      "items-center",
      "justify-center",
      "text-center",
      "text-xl",
      "font-poppins",
      "font-medium",
      "text-white"
    );

    const parrafo = document.createElement("p");
    parrafo.classList.add("py-2");
    parrafo.textContent = tarea.descripcion;
    parrafo.addEventListener("click", () => editarTarea(tarea.id));

    if (!tarea.activo) {
      parrafo.classList.add("line-through");
      article.classList.replace("bg-purple-700", "bg-purple-900");
    }

    const div = document.createElement("div");
    div.classList.add("cursor-pointer", "ml-3");
    div.addEventListener("click", () => 
      eliminarTarea(tarea.id),
    );

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke", "currentColor");
    svg.classList.add("w-6", "h-6");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute(
      "d",
      "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    );

    svg.appendChild(path);
    div.appendChild(svg);

    article.appendChild(parrafo);
    article.appendChild(div);

    contenedorTareas.appendChild(article);
  });
};

mostrarTareas();
