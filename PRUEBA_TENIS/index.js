class Partido {
    constructor(torneo, ronda, jugador1, ranking1, jugador2, ranking2, sets) {
        this.torneo = torneo;
        this.ronda = ronda;
        this.jugador1 = { nombre: jugador1, ranking: ranking1, puntos: 0, setsGanados: 0 };
        this.jugador2 = { nombre: jugador2, ranking: ranking2, puntos: 0, setsGanados: 0 };
        this.sets = sets;
        this.estadisticas = { ace: 0, primerServicio: 0, segundoServicio: 0, dobleFalta: 0, golpeGanador: 0 };
        this.puntuacionActual = [0, 0]; // Índices para mantener la puntuación actual
        this.setActual = 1;
    }

    incrementarPunto(jugador) {
        jugador.puntos += 1;
        this.actualizarPuntos(jugador);
    }

    actualizarPuntos(jugador) {
        const puntosGanados = ["0", "15", "30", "40", "Gana Set"];
        if (jugador.puntos >= 4 && jugador.puntos - this.obtenerOponente(jugador).puntos >= 2) {
            this.registrarSetGanado(jugador);
        }
    }

    obtenerOponente(jugador) {
        return jugador === this.jugador1 ? this.jugador2 : this.jugador1;
    }

    registrarSetGanado(jugador) {
        jugador.setsGanados += 1;
        jugador.puntos = 0;
        this.obtenerOponente(jugador).puntos = 0;
        if (jugador.setsGanados === this.sets) this.finalizarPartido();
    }

    actualizarEstadisticas(tipo) {
        if (this.estadisticas.hasOwnProperty(tipo)) this.estadisticas[tipo]++;
    }

    finalizarPartido() {
        alert(`Partido terminado. Ganador: ${this.jugador1.setsGanados > this.jugador2.setsGanados ? this.jugador1.nombre : this.jugador2.nombre}`);
    }
}

document.getElementById("configForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const torneo = document.getElementById("torneo").value;
    const ronda = document.getElementById("ronda").value;
    const jugador1 = document.getElementById("jugador1").value;
    const ranking1 = parseInt(document.getElementById("ranking1").value);
    const jugador2 = document.getElementById("jugador2").value;
    const ranking2 = parseInt(document.getElementById("ranking2").value);
    const sets = parseInt(document.getElementById("sets").value);

    const partido = new Partido(torneo, ronda, jugador1, ranking1, jugador2, ranking2, sets);

    document.getElementById("inicioPartido").style.display = "none";
    document.getElementById("marcadorPartido").style.display = "block";

    document.getElementById("torneoNombre").innerText = torneo;
    document.getElementById("jugador1Nombre").innerText = jugador1;
    document.getElementById("jugador2Nombre").innerText = jugador2;

    document.getElementById("botonJugador1").addEventListener("click", () => {
        partido.incrementarPunto(partido.jugador1);
    });

    document.getElementById("botonJugador2").addEventListener("click", () => {
        partido.incrementarPunto(partido.jugador2);
    });

    document.getElementById("verEstadisticas").addEventListener("click", () => {
        alert(`Estadísticas:\nAce: ${partido.estadisticas.ace}\n1º Servicio: ${partido.estadisticas.primerServicio}\n2º Servicio: ${partido.estadisticas.segundoServicio}\nDoble Falta: ${partido.estadisticas.dobleFalta}\nGolpe Ganador: ${partido.estadisticas.golpeGanador}`);
    });
});
