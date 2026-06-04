
import { useNavigate } from "react-router-dom";
import "../index.css";

function HomePage() {
    const navigate = useNavigate();


    return (
        <div className="home">

            <section className="hero">

                <div className="hero-text">
                    <h1>📚 Discover Your Next Favorite Book</h1>
                    <p>Thousands of books from Open Library API waiting for you</p>

                    <button onClick={() => navigate("/products")}>
                        Browse Books
                    </button>
                </div>

                <div className="featured">
                    <h3>Most Popular Picks</h3>

                    <div className="cards">
                        <div className="card">📚 Harry Potter</div>
                        <div className="card">📚 The Lord of the Rings</div>
                        <div className="card">📚 J.K.Rowling</div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default HomePage;