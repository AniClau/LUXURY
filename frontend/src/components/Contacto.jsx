function Contacto() {
    return (
        <section className="section contacto" id="contacto">

            <h2>Reservar Evento</h2>

            <form>

                <input type="text" placeholder="Nombre" />

                <input type="email" placeholder="Correo" />

                <input type="date" />

                <textarea placeholder="Detalles del evento"></textarea>

                <button className="btn">Enviar</button>

            </form>

        </section>
    );
}

export default Contacto;