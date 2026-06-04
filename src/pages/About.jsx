import Footer from "../components/Footer";

function About() {
    return (
        <div>

            {/* ABOUT IMAGE */}
            <div className="about-image">
                <img src="/images/about-us.jpg" alt="About Us" />
            </div>

            {/* ABOUT SECTION */}
            <div className="aboutus">

                <img src="/images/rosanda.jpg" alt="Euro Kreativ" />

                <div className="aboutus-text">
                    <h2>Over 20 Years of Publishing Excellence</h2>

                    <p>
                        Founded in 2003, Rosanda is a publishing house dedicated to bringing
                        quality books to readers of all ages. With a passion for literature,
                        education, and culture, Rosanda offers a wide collection of novels,
                        children's books, academic publications, and inspiring stories.

                        Through years of experience and commitment to excellence, Rosanda has
                        become a trusted name among readers and authors, helping promote
                        knowledge, creativity, and the love of reading.
                    </p>

                </div>

            </div>

            {/* VISION SECTION */}
            <div id="vision">

                <div className="v-m">

                    <div className="aboutus-text-vm">

                        <h2>Vision and Mission</h2>
                        <p>
                            <b>Our Vision</b> is to inspire a lifelong love of reading and learning by
                            making quality books accessible to readers of all ages. We strive to be
                            a trusted publishing house that promotes knowledge, creativity, and
                            cultural enrichment through literature.

                            <b> Our Mission</b> is to publish and distribute high-quality books that
                            educate, inspire, and entertain. We are committed to supporting authors,
                            encouraging literary excellence, and providing readers with meaningful
                            content that enriches their lives and broadens their perspectives.
                        </p>


                    </div>

                    <img src="/images/mission.jpeg" alt="Vision" />

                </div>

            </div>
            <Footer />
        </div>

    );
}

export default About;