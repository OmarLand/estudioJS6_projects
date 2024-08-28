import { datosCita, submitCita } from "./funciones.js";
import { pacienteInput, propietarioInput, emailInput, fechaInput, formulario, sintomasInput } from "./selectores.js";

// Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)

formulario.addEventListener('submit', submitCita)


