
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [plan, setPlan] = useState("free");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-backend-url.onrender.com/webhook", {
        email, url, plan
      });
      alert("Submitted successfully");
    } catch (err) {
      console.error(err);
      alert("Error submitting data");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Insta Auto Link Bot</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <input placeholder="Insta URL" value={url} onChange={(e) => setUrl(e.target.value)} /><br/>
        <select value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
