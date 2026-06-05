import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
    const params = useParams();
    const id = params["*"];
    const navigate = useNavigate();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const cleanId = id.startsWith("/") ? id : "/" + id;
        const url = "https://openlibrary.org" + cleanId + ".json";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setBook(data))
            .catch(() => setError("Failed to load book"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!book) return <p>No book found</p>;

    const description =
        typeof book.description === "string"
            ? book.description
            : book.description?.value || "No description";
    return (
        <div className="details-wrapper">
            <div className="details-card">

                <h1>{book.title}</h1>

                <p className="description">
                    {description}
                </p>
                <button
                    className="back-btn"
                    onClick={() => navigate("/products")}>
                    ← Back to Books
                </button>
            </div>
        </div>
    );
}
export default BookDetails;