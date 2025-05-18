import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";

const BookTour = () => {
  const { id } = useParams();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  const serviceID = "service_j619t7k";
  const ownerTemplateID = "template_pfve28s";     // Email to business
  const customerTemplateID = "template_6q9tpqq"; // Email to customer
  const publicKey = "aw9O75zvBqxcfpKnM";

  // Send to owner
  emailjs.sendForm(serviceID, ownerTemplateID, form.current, publicKey)
    .then(() => {
      // Now send to customer
      emailjs.sendForm(serviceID, customerTemplateID, form.current, publicKey)
        .then(() => {
          setMessage("✅ Booking request sent successfully. We will get back to you soon.");
          setIsSending(false);
          form.current.reset();
        })
        .catch((error) => {
          console.error("Customer email error:", error);
          setMessage("✅ Sent to owner, but failed to send confirmation to customer.");
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
    <>
      <div className="lg:w-1/3 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 h-fit top-24 mt-10 lg:mt-0">
        <h3 className="text-xl font-semibold mb-4 text-center">Enquire About Tour</h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name" 
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
          <input
            type="email"
            name="user_email" 
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
          <input
            type="date"
            name="booking_date" 
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
           <input
            type="number"
            name="number" 
            placeholder="Number of people"
            className="border border-gray-300 rounded-lg p-2 text-sm"
          />
          <textarea
            name="message" // ✅ Matches template tag {{message}}
            rows="3"
            placeholder="Additional Notes"
            className="border border-gray-300 rounded-lg p-2 text-sm"
          ></textarea>
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
    </>
  );
};

export default BookTour;
