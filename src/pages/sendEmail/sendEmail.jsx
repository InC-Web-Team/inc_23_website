
import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "INC",
  "Impetus",
  "Concepts",
  "Pradnya",
  "Project",
  "Presentation",
  "Embeded Systems",
  "Web Development",
  "IOT",
  "Hardware",
  "Application Development",
  "Project Management",
];
const DURATION = 15000;
const ROWS = 20;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span className="text-lg text-gold">#</span> {text}
  </div>
);

const SendEmail = () => {
  const [toEmail, setToEmail] = useState('');
  const [toError, setToError] = useState('');

  const containerStyle = {
    position: 'relative',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginBottom: '50px', // Adjust this value as needed
    zIndex: 1,
  };

  const inputStyle = {
    marginBottom: '15px',
    width: 'calc(100% - 20px)',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  };

  const handleToChange = (event) => {
    const email = event.target.value;
    setToEmail(email);
    // Simple email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setToError(isValidEmail ? '' : 'Please enter a valid email address');
  };

  const handleSubmit = () => {
    if (toEmail === '') {
      setToError('Please enter an email address');
    } else if (toError === '') {
      // Do something with the valid email address
      console.log('Valid email:', toEmail);
    }
  };

  return (
    <div>

<div className="tag-list w-full blur-sm hover:blur-none transition duration-300 h-full">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>



      <Fade>
        <div style={{ position: 'relative' }}>
          <div style={containerStyle}>
            <header className="header-about my-20">
              <h1 className="text-center" style={{ marginBottom: '10px', color: '#fff' }}>Send Email</h1>
            </header>
            <div className="about-body relative overflow-hidden">
              <div className="about-content text-justify w-[90%] md:w-8/12 z-10 p-8 md:px-12 text-lg shadow-2xl shadow-light_blue/20 bg-[#000]/80 rounded-xl border border-light_blue/30">
                <div>
                  <label htmlFor="to" style={{ color: '#fff' }}>To:</label>
                  <input type="text" id="to" name="to" style={inputStyle} value={toEmail} onChange={handleToChange} />
                  {toError && <p className="text-red-500 text-sm">{toError}</p>}
                </div>
                <div>
                  <label htmlFor="content" style={{ color: '#fff' }}>Content:</label>
                  <textarea id="content" name="content" rows="4" style={inputStyle}></textarea>
                </div>
                <button type="button" className="bg-blue-900 text-white px-4 py-2 rounded-md block mx-auto mt-4" onClick={handleSubmit}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SendEmail;
