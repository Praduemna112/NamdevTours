import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";
import travelData from "../TravelData"; // Your tour data

const BookTour = () => {
  const { id } = useParams();
  const form = useRef();
  const dropdownRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Controlled form data state
  const [formData, setFormData] = useState({
    interest: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    booking_date: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const selectedTour = travelData.find((item) => item.id === id);
    if (selectedTour) {
      setFormData((prev) => ({ ...prev, interest: selectedTour.title }));
    }
  }, [id]);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!formData.interest) {
      setError("Please select a tour before submitting.");
      return;
    }

    setIsSending(true);

    const serviceID = "service_j619t7k";
    const ownerTemplateID = "template_pfve28s"; // For admin/owner
    const customerTemplateID = "template_6q9tpqq"; // For user/customer
    const publicKey = "aw9O75zvBqxcfpKnM";

    // Send email to owner/admin
    emailjs
      .sendForm(serviceID, ownerTemplateID, form.current, publicKey)
      .then(() => {
        // Then send confirmation email to customer/user
        emailjs
          .sendForm(serviceID, customerTemplateID, form.current, publicKey)
          .then(() => {
            setMessage("✅ Booking request sent successfully.");
            setIsSending(false);
            form.current.reset();
            setFormData({
              interest: "",
              user_name: "",
              user_email: "",
              user_phone: "",
              booking_date: "",
              number: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("Customer email error:", error);
            setMessage(
              "✅ Sent to owner, but failed to send confirmation to customer."
            );
            setIsSending(false);
          });
      })
      .catch((error) => {
        console.error("Owner email error:", error);
        setMessage("❌ Failed to send booking request. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <div className="lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 h-fit top-24 mt-10 lg:mt-0">
      <h3 className="text-xl font-semibold mb-4 text-center">Enquire About Tour</h3>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Hidden input to pass selected tour title */}
        <input type="hidden" name="interest" value={formData.interest} />

        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          value={formData.user_name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-2 text-sm"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-2 text-sm"
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number"
          value={formData.user_phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-2 text-sm"
        />
        <input
          type="date"
          name="booking_date"
          value={formData.booking_date}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-2 text-sm"
        />
        <input
          type="number"
          name="number"
          placeholder="Number of people"
          value={formData.number}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-2 text-sm"
        />

        {/* Custom Scrollable Tour Selection Dropdown */}
        <div className="mb-2 relative" ref={dropdownRef}>
          <label className="block text-gray-700 mb-1">Select Tour</label>
          <div
            className={`border rounded p-2 text-sm bg-white cursor-pointer relative ${
              error && !formData.interest ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {formData.interest || "Select a tour"}
          </div>
          {showDropdown && (
            <ul className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg">
              {travelData.map((item) => (
                <li
                  key={item.id}
                  className="p-2 hover:bg-orange-100 cursor-pointer"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, interest: item.title }));
                    setShowDropdown(false);
                    setError("");
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <textarea
          name="message"
          rows="3"
          placeholder="Additional Notes"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 text-sm"
        ></textarea>

        {error && <p className="text-sm text-center text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={isSending}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 font-semibold text-sm transition duration-200"
        >
          {isSending ? "Sending..." : "Submit Booking"}
        </button>

        {message && <p className="text-sm text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default BookTour;
