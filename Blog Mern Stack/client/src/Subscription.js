import React, { useState } from "react";
function Subscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("Unable to subscribe. Please try again.");
    }
  };
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our website for the latest updates and Blogs.</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default Subscription;
