import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d2tzp19", "template_nvyn0bf", form.current, {
        publicKey: "2w5y7-ykPIlQ-3UQk",
      })
      .then(
        () => {
          setSent(true);
          setError("");
          form.current.reset();
        },
        (error) => {
          setError("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <textarea
            name="message"
            rows="3"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Interest Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            You are interested in <span className="text-red-500">*</span>
          </label>
          <select
            name="interest"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="None">
              --- Please Select ---
            </option>
            <option value="install_premises">I want to install your vending machines in my premises</option>
            <option value="buy_or_start">I want to buy vending machines or start a vending business</option>
            <option value="place_brand_products">I want to place my brand's products in your machines</option>
            <option value="exclusive_brand_machines">I want to install exclusive machines with my brand's products</option>
            <option value="customer_feedback">I am a customer, I have a feedback</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-green-600 text-sm text-center mt-2">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Email;
