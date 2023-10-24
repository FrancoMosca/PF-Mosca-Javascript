let listaDeTareas = [];

function elegirOpcion(){
    let opcion = prompt('Que accion desea realizar: 1.Añadir una tarea 2.Eliminar una tarea 3.Editar una tarea 4.Ver todas las tareas')
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
    }
}

function anadirTarea(){
    let tarea = prompt('Ingrese la tarea');

    listaDeTareas.push((listaDeTareas.length + 1 +".") + tarea)
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