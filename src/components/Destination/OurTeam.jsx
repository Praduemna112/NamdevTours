import React from "react";
import heroBg1 from "../../assets/photos/aboutus.jpg";
import instagramIcon from "../../assets/Instagram_icon.png";
import facebookIcon from "../../assets/Facebook_icon.png";
import linkedinIcon from "../../assets/Linkedin_icon.png";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Creative Director",
    img: heroBg1,
    desc: "Alice leads our creative vision and branding.",
    socials: {
      instagram: "https://instagram.com/alice",
      facebook: "https://facebook.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
  },
  {
    name: "Bob Smith",
    role: "Travel Consultant",
    img: heroBg1,
    desc: "Bob crafts unforgettable travel experiences.",
    socials: {
      instagram: "https://instagram.com/bob",
      facebook: "https://facebook.com/bob",
      linkedin: "https://linkedin.com/in/bob",
    },
  },
  {
    name: "Clara Lee",
    role: "Marketing Manager",
    img: heroBg1,
    desc: "Clara handles all our outreach and campaigns.",
    socials: {
      instagram: "https://instagram.com/clara",
      facebook: "https://facebook.com/clara",
      linkedin: "https://linkedin.com/in/clara",
    },
  },
  {
    name: "David Kumar",
    role: "Operations Head",
    img: heroBg1,
    desc: "David ensures seamless travel operations.",
    socials: {
      instagram: "https://instagram.com/david",
      facebook: "https://facebook.com/david",
      linkedin: "https://linkedin.com/in/david",
    },
  },
  {
    name: "Emily Zhang",
    role: "Content Strategist",
    img: heroBg1,
    desc: "Emily curates content that inspires journeys.",
    socials: {
      instagram: "https://instagram.com/emily",
      facebook: "https://facebook.com/emily",
      linkedin: "https://linkedin.com/in/emily",
    },
  },
];

const OurTeam = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="absolute inset-0  z-10" />
        <div className="relative z-20 text-center text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold italic drop-shadow-lg">Our Team</h1>
          <p className="mt-4 text-xl italic">Discover the world, one journey at a time.</p>
          <p className="mt-2 text-yellow-400 italic">
            Embrace tourism that connects cultures, nature, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="py-16 bg-gray-100 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-center flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-indigo-600 italic mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.desc}</p>
                <div className="flex space-x-4">
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                  <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 hover:scale-110 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
