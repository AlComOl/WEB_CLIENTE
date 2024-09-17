let palabra=(prompt("Ingrese palabra a traducir"));



switch (palabra) {
    case 'mesa':
        document.write("table");
    break;
    case 'casa':
        document.write("house");
    break;
    case 'perro':
        document.write("dog");
    break;
    case 'gato':
        document.write("cat");
    break;

    default:
        document.write("La palabra no esta en el dicionario");
        break;
}



