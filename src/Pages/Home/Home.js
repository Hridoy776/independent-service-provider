import React from "react";
import { Carousel, Row } from "react-bootstrap";
import useServices from "../../useServices";
import Services from "./Services/Services";
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
import Packages from "./Packages/Packages";
const Home = () => {
  const [services] = useServices();
  return (
    <main>
      <section className="container">
      <Carousel className="silder" variant="dark">
          <Carousel.Item>
            <img
              className="d-block h-75 w-100"
              src={banner1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              alt="Third slide"
            />
            
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="services" className="container my-3">
        <h1 className="common text-center my-5">services</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </Row>
      </section>
      <section id="packages" className="container my-5">
        <Packages></Packages>
      </section>
    </main>
  );
};

export default Home;
