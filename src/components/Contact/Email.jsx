// src/components/Email.jsx
import React, { useState } from "react";
import travelData from "../TravelGrid/TravelData"; // <-- Adjust the path if needed

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sending logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-4 py-8">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select Tour</label>
        <select
          name="interest"
          className="w-full border border-gray-300 rounded p-2"
          value={formData.interest}
          onChange={handleChange}
          required
        >
          <option value="">Select a tour</option>
          {travelData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea
          name="message"
          className="w-full border border-gray-300 rounded p-2"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Send
      </button>
    </form>
  );
};

export default Email;
