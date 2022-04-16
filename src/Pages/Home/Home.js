import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../useServices';
import Services from './Services/Services';

const Home = () => {
    const [services]=useServices()
    return (
        <section className='container'>
            <h1>services</h1>
            <Row>
                {
                    services.map(service=><Services
                         key={service.id}
                         service={service}></Services>)
                }
            </Row>
        </section>
    );
};

export default Home;