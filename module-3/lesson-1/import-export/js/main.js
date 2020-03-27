// este es el fichero principal desde importamos las dependencias
// este fichero depende de los ficheros dom y math para trabajar
import dom from './dom.js';
import math from './math.js';

// una vez importados dom y math los podemos usar
dom.getEl('.js-add').innerHTML = math.add(5, 3);
dom.getEl('.js-sub').innerHTML = math.sub(5, 3);
