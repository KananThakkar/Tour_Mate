import React, { useEffect, useState } from "react";

const API_KEY = "6385b5ad692045a298892c7b65a14a86"; // <-- put your key here

const TravelArticles = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch general travel articles on page load
  useEffect(() => {
    fetchGeneralArticles();
  }, []);

  const fetchGeneralArticles = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=travel OR tourism OR monuments&language=en&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`
      );

      const data = await response.json();

      if (data.status !== "ok") {
        setError(data.message);
        setLoading(false);
        return;
      }

      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch articles.");
    }

    setLoading(false);
  };

  // ✅ Search articles
  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`
      );

      const data = await response.json();

      if (data.status !== "ok") {
        setError(data.message);
        setLoading(false);
        return;
      }

      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch search results.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        📰 Travel Articles
      </h1>

      {/* Search Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search travel news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {/* Articles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="news"
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
            )}

            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "18px" }}>{article.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", fontWeight: "bold" }}
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelArticles;