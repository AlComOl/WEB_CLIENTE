// Comprobaremos que quedan artículos disponibles. El stock debe ser mayor
// que 0, si no es así, no haremos ninguno de los siguientes puntos.

// Restaremos 1 al número de artículos disponibles (stock). Si después de
// disminuir el stock, no quedan más artículos disponibles, le añadiremos al
// elemento de la clase stock del artículo, la clase agotado. Esto hará que el
// stock aparezca tachado (otra forma de saber si hay artículos disponibles,
// sería comprobar si el elemento tiene aplicada esta clase).
// Incrementaremos el número de artículos comprados.
// Actualizaremos el precio total de la compra, sumándole el precio del
// artículo.
// Añadiremos el producto al principio del carrito. Para ello, seguiremos los
// siguientes pasos:
// o Haremos una copia del artículo sobre el que se ha pulsado. Como
// esta copia la tenemos que introducir en el carrito, para evitar tener
// un id duplicado, le añadiremos al atributo id una “c” delante.
// Construiremos el id de la siguiente forma:
//  “c” + id
// Cuando introduzcamos dos artículos iguales en el carrito, el id
// seguirá estando duplicado, pero ya solucionaremos esto más
// adelante.
// o Le añadiremos la clase icart a la copia creada.
// o Le ocultaremos el elemento de la clase stock (para hacer esto,
// podemos utilizar el método .hide() de jQuery).