import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { BOOKS_API } from "../api/constants";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Books() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const inputRef = useRef(null);


    useEffect(() => {

        fetch(BOOKS_API)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.docs);
            })
            .catch(() => {
                setError("Failed to load books");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);


    const filteredBooks = useMemo(() => {
        return books.filter((b) =>
            b.title?.toLowerCase().includes(search.toLowerCase())
        );
    }, [books, search]);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>📚 Books</h1>
            <div className="search-box">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search books..."
                    value={search}
                    onChange={handleSearch}
                />

                <button onClick={() => inputRef.current.focus()}>
                    Focus
                </button>
            </div>

            <div className="grid">
                {filteredBooks.map((book) => (
                    <div key={book.key} className="card">

                        <img
                            src={
                                book.cover_i
                                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                    : "https://via.placeholder.com/150"
                            }
                            alt={book.title}
                        />

                        <h3>{book.title}</h3>
                        <p>{book.author_name?.[0]}</p>

                        <Link to={`/book/${encodeURIComponent(book.key)}`}>
                            Details
                        </Link>

                    </div>
                ))}
            </div>

            <Footer />
        </div>

    );

}

export default Books;