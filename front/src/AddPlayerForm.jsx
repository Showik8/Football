import React, { useState } from "react";
import axios from "axios";
import "./AddPlayerForm.css";

const AddPlayerForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    position: "",
    height: "",
    team_id: "",
    stats: { matches_played: "", goals: "", assists: "" },
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("stats.")) {
      const statKey = name.split(".")[1];
      setFormData({
        ...formData,
        stats: { ...formData.stats, [statKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/players",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        first_name: "",
        last_name: "",
        birth_date: "",
        position: "",
        height: "",
        team_id: "",
        stats: { matches_played: "", goals: "", assists: "" },
      });
    } catch (error) {
      setMessage(
        error.response?.data?.error || "ფეხბურთელის დამატება ვერ მოხერხდა"
      );
    }
  };

  return (
    <div className="add-player-container">
      <h2>ახალი ფეხბურთელის დამატება</h2>
      <form onSubmit={handleSubmit} className="add-player-form">
        <div className="form-group">
          <label htmlFor="first_name">სახელი</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="სახელი"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">გვარი</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="გვარი"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">დაბადების თარიღი</label>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">პოზიცია</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">აირჩიეთ პოზიცია</option>
            <option value="Forward">თავდამსხმელი</option>
            <option value="Midfielder">ნახევარმცველი</option>
            <option value="Defender">მცველი</option>
            <option value="Goalkeeper">მეკარე</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height">სიმაღლე (სმ)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="სიმაღლე"
          />
        </div>
        <div className="form-group">
          <label htmlFor="team_id">გუნდის ID</label>
          <input
            type="numeric"
            name="team_id"
            value={formData.team_id}
            onChange={handleChange}
            placeholder="გუნდის ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stats.matches_played">თამაშები</label>
          <input
            type="number"
            name="stats.matches_played"
            value={formData.stats.matches_played}
            onChange={handleChange}
            placeholder="თამაშების რაოდენობა"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stats.goals">გოლები</label>
          <input
            type="number"
            name="stats.goals"
            value={formData.stats.goals}
            onChange={handleChange}
            placeholder="გოლები"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stats.assists">პასები</label>
          <input
            type="number"
            name="stats.assists"
            value={formData.stats.assists}
            onChange={handleChange}
            placeholder="პასები"
          />
        </div>
        <button type="submit" className="submit-button">
          ფეხბურთელის დამატება
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddPlayerForm;
