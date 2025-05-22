
import registarEventosInicio from "./registrarEventos/registarEventosInicio.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import io from "./servidor.js";

io.on("connection", (socket) => {

  registarEventosInicio(socket, io);
  registrarEventosDocumento

});
