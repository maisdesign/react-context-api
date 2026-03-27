export default function BrandIdentity({ brandObj }) {
    return (
        <section className="brand-identity">
            <div className="row">

                <div className="col-md-7">
                    <h2 className="brand-identity-heading">
                        {brandObj.heading}
                    </h2>
                </div>

                <div className="col-md-5 d-flex flex-column justify-content-end">
                    <div className="spec-list label">
                        {brandObj.speciality.map((spec) =>
                            <div key={spec.id} className="spec-row">
                                <span className="spec-label">{spec.spec}</span>
                                <span className="spec-value">{spec.value}</span>
                            </div>)}
                    </div>
                </div>

            </div>
        </section>
    )
}
