import React, { useState } from "react";
import "./Reviews.css";

const initialReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    place: "Manali",
    rating: 5,
    review: "Amazing snowfall and adventure activities!",
    date: "Jan 2026",
    likes: 10,
  },
  {
    id: 2,
    name: "Priya Patel",
    place: "Goa",
    rating: 4,
    review: "Beautiful beaches but a bit crowded.",
    date: "Feb 2026",
    likes: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    place: "Jaipur",
    rating: 5,
    review: "Loved the heritage and food!",
    date: "Mar 2026",
    likes: 8,
  },
  {
  id: 4,
  name: "Sneha Kapoor",
  place: "Shimla",
  rating: 4,
  review: "Beautiful hills and pleasant weather. Mall Road was great!",
  date: "Mar 2026",
  likes: 6,
},
{
  id: 5,
  name: "Rohit Mehta",
  place: "Rishikesh",
  rating: 5,
  review: "River rafting was thrilling. A must-visit for adventure lovers!",
  date: "Feb 2026",
  likes: 12,
},
{
  id: 6,
  name: "Neha Joshi",
  place: "Udaipur",
  rating: 4,
  review: "City of lakes is truly romantic and peaceful.",
  date: "Jan 2026",
  likes: 7,
},
{
  id: 7,
  name: "Vikram Singh",
  place: "Leh Ladakh",
  rating: 5,
  review: "Breathtaking landscapes and unforgettable road trip!",
  date: "Sep 2025",
  likes: 15,
},
{
  id: 8,
  name: "Pooja Shah",
  place: "Goa",
  rating: 3,
  review: "Good beaches but too crowded during peak season.",
  date: "Dec 2025",
  likes: 4,
},
{
  id: 9,
  name: "Ankit Verma",
  place: "Jaipur",
  rating: 5,
  review: "Loved the forts, culture, and Rajasthani food.",
  date: "Feb 2026",
  likes: 9,
},
{
  id: 10,
  name: "Kavita Iyer",
  place: "Kerala",
  rating: 5,
  review: "Backwaters and houseboat stay were amazing.",
  date: "Nov 2025",
  likes: 11,
},
{
  id: 11,
  name: "Suresh Patel",
  place: "Mount Abu",
  rating: 4,
  review: "Nice hill station in Rajasthan, Nakki Lake was peaceful.",
  date: "Jan 2026",
  likes: 5,
},
{
  id: 12,
  name: "Aisha Khan",
  place: "Darjeeling",
  rating: 5,
  review: "Tea gardens and sunrise at Tiger Hill were beautiful.",
  date: "Oct 2025",
  likes: 13,
},
{
  id: 13,
  name: "Manish Gupta",
  place: "Varanasi",
  rating: 4,
  review: "Spiritual experience at Ganga Aarti was unforgettable.",
  date: "Mar 2026",
  likes: 8,
}
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [form, setForm] = useState({
    name: "",
    place: "",
    rating: 0,
    review: "",
  });

  // ⭐ Filter Logic
  const filteredReviews = reviews.filter((r) => {
    return (
      r.place.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? r.rating >= filter : true)
    );
  });

  // ⭐ Add Review
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    setReviews([newReview, ...reviews]);

    setForm({ name: "", place: "", rating: 0, review: "" });
  };

  // ⭐ Star UI
  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div className="reviews-page">

      <h1>⭐ Reviews & Ratings</h1>

      {/* SEARCH + FILTER */}
      <div className="review-controls">
        <input
          type="text"
          placeholder="Search place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="5">5 ⭐</option>
          <option value="4">4 ⭐ & above</option>
          <option value="3">3 ⭐ & above</option>
        </select>
      </div>

      {/* REVIEWS LIST */}
      <div className="reviews-container">
        {filteredReviews.map((r) => (
          <div className="review-card" key={r.id}>
            <h3>{r.name}</h3>
            <p className="place">{r.place}</p>
            <p className="stars">{renderStars(r.rating)}</p>
            <p>{r.review}</p>
            <small>{r.date}</small>

            <button className="like-btn">
              👍 Helpful ({r.likes})
            </button>
          </div>
        ))}
      </div>

      {/* ADD REVIEW FORM */}
      <div className="review-form">
        <h2>Add Your Review ✍️</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Place (e.g. Goa)"
            value={form.place}
            required
            onChange={(e) => setForm({ ...form, place: e.target.value })}
          />

          {/* STAR SELECT */}
          <select
            value={form.rating}
            required
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
          >
            <option value="0">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>

          <textarea
            placeholder="Write your experience..."
            value={form.review}
            required
            onChange={(e) => setForm({ ...form, review: e.target.value })}
          ></textarea>

          <button type="submit">Submit Review</button>
        </form>
      </div>

    </div>
  );
};

export default Reviews;