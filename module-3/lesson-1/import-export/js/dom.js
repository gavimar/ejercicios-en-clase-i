// este fichero es un módulo
// exporta funciones (o cualquier otra cosa de JS) para que sea usada en otros ficheros
// en este fichero también puede importar cosas de otros ficheros

function getElement(selector) {
  return document.querySelector(selector);
}

export default {
  getEl: getElement
};
