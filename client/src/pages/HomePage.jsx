import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className="top-slider" activeIndex={index} onSelect={handleSelect} fade> {/* variant="dark" */}
                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/1.jpg"
                        alt="First slide"
                    />

                    {/* <Carousel.Caption>
                        <h1>EG Hotels</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                    
                </Carousel.Item>

                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="responsive-banner">
                <img
                className="d-block w-100"
                src="/images/home/1-responsive.jpg"
                alt="Third slide"
                />
            </div>


            <div className="container">
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
                <section>
                    <h1>1234</h1>
                </section>
            </div>

            <div className="container">
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore architecto cupiditate odio nisi non natus quod blanditiis sit nostrum tempore esse dolorem nobis, deserunt tempora? Illo voluptatem perferendis quisquam alias!</p>
            </div>
        </>
    );
};

export default HomePage;