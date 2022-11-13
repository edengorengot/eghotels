import CallToAction from '../components/CallToAction/CallToAction';

const About = () => {
    return (
        <>
            <div className="top-banner">
                    <img
                         className="fullSize"
                        src="/images/about/banner.jpeg"
                        alt="laptop with a cup with lake view"
                    />

                    <img
                        className="responsiveImg"
                        src="/images/about/banner-responsive.jpeg"
                        alt="laptop with a cup with lake view"
                    />
            </div>

            <div className="main container">
                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/about/main.jpeg" alt="hotel's lobby" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>About EG Hotels</h2>
                            <p>At EG Hotels, every stay is a story. And it starts with love. We believe luxury – meaningful, personalized, warm – is our love language, and we deliver it one small act at a time.</p>
                            <h3>The EG story</h3>
                            <p>A name synonymous around the world for continual innovation, remarkable expansion and a single-minded dedication to the highest standards of service, discover how EG Hotels has transformed the hospitality industry and redefined the meaning of luxury travel since first opening its doors back in 2022.</p>
                        </div>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default About;