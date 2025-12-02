// Aplicación para la Gestión de Dispositivos en el DCYT
// Módulos principales:
//- Gestión de Equipos (Cl_mEquipos): CRUD completo de activos tecnológicos.
//- Vista Principal (Cl_vDCYT): Interfaz de usuario para Admin y Usuario Normal.
//Funcionalidades:
//- Registrar, editar y eliminar equipos de los laboratorios.
// - Validar integridad de datos (Serial único, Laboratorios válidos).
// - Consultar inventario con filtros avanzados.
// - Persistencia de datos en la nube mediante WebStorage (Cl_dcytDb).
import Cl_controlador from "./Cl_controlador.js";
import Cl_mDCYT from "./Cl_mDCYT.js";
import Cl_vDCYT from "./Cl_vDCYT.js";
export default class Cl_index {
    constructor() {
        let modelo = new Cl_mDCYT();
        modelo.cargar((error) => {
            if (error) {
                alert("Error crítico cargando el sistema: " + error);
                // throw new Error(error); // Opcional: detener ejecución
            }
            // Aunque haya error, intentamos cargar la vista (la tabla saldrá vacía)
            let vista = new Cl_vDCYT();
            let controlador = new Cl_controlador(modelo, vista);
            vista.controlador = controlador;
            vista.refresh(); // Asegura que se pinte la tabla inicial
        });
    }
}
