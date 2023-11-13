let listaDeTareas = [
    [
        {
          "id": "1",
          "descripcion": "Finish project",
          "activo": true
        },
        {
          "id": "2",
          "descripcion": "Buy groceries",
          "activo": true
        },
        {
          "id": "3",
          "descripcion": "Go to the gym",
          "activo": true
        },
        {
          "id": "4",
          "descripcion": "Call mom",
          "activo": false
        },
        {
          "id": "5",
          "descripcion": "Read a book",
          "activo": true
        },
        {
          "id": "6",
          "descripcion": "Pay bills",
          "activo": true
        },
        {
          "id": "7",
          "descripcion": "Clean the house",
          "activo": true
        },
        {
          "id": "8",
          "descripcion": "Attend meeting",
          "activo": true
        },
        {
          "id": "9",
          "descripcion": "Walk the dog",
          "activo": false
        },
        {
          "id": "10",
          "descripcion": "Cook dinner",
          "activo": false
        }
      ]
];
elegirOpcion()
function elegirOpcion(){
    let opcion = prompt('Que accion desea realizar: 1.Añadir una tarea 2.Eliminar una tarea 3.Editar una tarea 4.Ver todas las tareas 5.Ver tareas inactivas')
    switch(opcion){
        case "1":
            anadirTarea();
            break;
        case "2":
            eliminarTarea();
            break;
        case "3": 
            editarTarea();
            break;
        case "4":
            verTareas();
            break;
        case "5":
            getTaresInactivas();
            break;
    }
}

function anadirTarea(){
    let descripcion = prompt('Ingrese la tarea');
    let tarea = new Tarea( descripcion )

    listaDeTareas.push(tarea)
    console.log(tarea);
    console.log(listaDeTareas);
    console.log("Se ha añadido la tarea");
}

function eliminarTarea(){
    let id = prompt("Qué número de tarea desea eliminar?");

    id = id - 1;

    if(id >= 0 && id < listaDeTareas.length) {
        console.log("Tarea eliminada:", listaDeTareas[id]);
        listaDeTareas.splice(id, 1);
    } else {
        console.log("Id no válido");
    }
}

function editarTarea(){
    let id = prompt("¿Qué número de tarea desea editar?");

    id = id - 1;

    if(id >= 0 && id < listaDeTareas.length){
        let nuevaTarea = prompt("Ingrese la nueva tarea");
        listaDeTareas[id] = (id + 1 + ".") + nuevaTarea;
        console.log("Tarea editada exitosamente");
    }
    else{
        console.log("Id no válido");
    }
}

function verTareas(){
    if(listaDeTareas.length === 0){
        console.log("La lista de tareas esta vacia");
    }else{
        console.log("LISTA DE TAREAS");
        console.log("---------------");
        for(let i = 0; i < listaDeTareas.length; i++) {
            console.log(listaDeTareas[i]);
        }
    }
}

function getTaresInactivas(){
    const tareasInactivas = listaDeTareas[0].filter(tarea => !tarea.activo);
    console.log(tareasInactivas)
}