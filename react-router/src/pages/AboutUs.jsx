function AboutUs() {
    return <>
        <div className="catalog-page">

            <header className="catalog-header">
                <div>
                    <span className="catalog-label">BoolStore / Storia</span>
                    <h1 className="catalog-title">About Us</h1>
                </div>
            </header>

            <section className="brand-identity" style={{ borderTop: "1px solid rgba(192, 201, 193, 0.2)" }}>
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="brand-identity-heading">
                            Un archivio curato di prodotti essenziali. Progettato per chi vuole comprare meglio, non di più.
                        </h2>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-end">
                        <div className="spec-list label">
                            <div className="spec-row">
                                <span className="spec-label">Fondazione</span>
                                <span className="spec-value">2026</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Sede</span>
                                <span className="spec-value">Acireale, IT</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Filosofia</span>
                                <span className="spec-value">Less, but better</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Catalogo</span>
                                <span className="spec-value">Selezione continua</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="single-product" style={{ marginTop: "4rem" }}>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <span className="catalog-label">Missione</span>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.04em", marginTop: "0.5rem" }}>
                            Qualità senza rumore
                        </h3>
                    </div>
                    <div className="col-lg-8">
                        <p className="text-muted" style={{ lineHeight: 1.7, maxWidth: "42rem" }}>
                            BoolStore nasce dalla convinzione che un buon negozio non debba travolgere. Selezioniamo prodotti che resistono al tempo, li presentiamo senza iperbole e lasciamo che parlino da soli. Nessuna notifica push. Nessun conto alla rovescia. Solo roba buona, disponibile quando ne hai bisogno.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    </>
}

export default AboutUs
