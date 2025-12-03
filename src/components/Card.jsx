import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ attore }) {
    const { id, name, nationality, known_for, image, awards, birth_year, biography, death_year, most_famous_movies } = attore

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-4">
                    <img src={image} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-8">
                    <div className={`card-body${death_year != null && death_year !== "" ? " bg-secondary" : ""}`}>
                        <h2 className="card-title">{name}</h2>
                        <h5>Anno di nascita:{birth_year}</h5>
                        <h5>Anno di morte:{death_year !== "" ? death_year : "Ancora vivo"}</h5>
                        <h5>Conosciuto per: {
                            // Se ho l'array ed ha una lunghezza maggiore di zero(condizione ternario)
                            // Allora prendo l'array known-for e lu unisco con le , usando join(primo caso)
                            // se l'array known-for non ha lunghezza allora entro nel secondo Caso
                            // allora prendo l'array most-Famous-movies e lo unisco come prima con join(secondo caso)
                            Array.isArray(known_for) && known_for.length > 0
                                ? known_for.join(', ')
                                : Array.isArray(most_famous_movies) && most_famous_movies.length > 0
                                    ? most_famous_movies.join(', ')
                                    // aggiungo un valore chiamato "Di fallback" se ne known o most famous hanno elementi
                                    : known_for || most_famous_movies || 'N/A'
                        }</h5>
                        <h6>Nazionalita:{nationality}</h6>
                        <p className="card-text">{biography}</p>
                        <h3>Riconoscimenti:{awards}</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}