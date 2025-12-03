import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ attore }) {
    const { id, name, nationality, known_for, image, awards, birth_year, biography, death_year } = attore

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className={`card-body${death_year != null && death_year !== "" ? " bg-secondary" : ""}`}>
                        <h2 className="card-title">{name}</h2>
                        <h5>Anno di nascita:{birth_year}</h5>
                        <h5>Anno di morte:{death_year !== "" ? death_year : "Ancora vivo"}</h5>
                        <h6>Nazionalita:{nationality}</h6>
                        <p className="card-text">{biography}</p>
                        <h3>Riconoscimenti:{awards}</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}