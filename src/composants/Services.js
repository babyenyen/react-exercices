function Services({ services }) {
    return (
        <section id='services'>
            {services.map((service, index) => (
                <div className="service" key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </section>
    );
}
export default Services;
