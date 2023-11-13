class Tarea {
    static #ultimoId = 0;
    #id;
    #descripcion;
    #activo;

    constructor(descripcion) {
        if (descripcion == null) {
            throw new Error("descripcion no puede ser nula");
        }
        Tarea.#ultimoId++;
        this.#id = Tarea.#ultimoId;
        this.#descripcion = descripcion;
        this.#activo = true;
    }

    get id() {
        return this.#id;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get activo() {
        return this.#activo;
    }

    set descripcion(descripcion) {
        if (descripcion == null) {
            throw new Error("descripcion no puede ser nula");
        }
        this.#descripcion = descripcion;
    }

    completarTarea() {
        this.#activo = false;
    }
}