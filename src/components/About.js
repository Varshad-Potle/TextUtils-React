import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  
  return (
    <div classNameName="container" >
      <h1 classNameName="my-3">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              
            >
              About TextUtils🧾
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" >
              TextUtils is a simple yet powerful React application designed to
              enhance your text formatting experience. With TextUtils, you can
              effortlessly:
              <div>✅ Convert text to UPPERCASE and lowercase</div>
              <div>✅ Copy text with a single click</div>
              <div>✅ Remove extra spaces for clean formatting</div>
              <div>✅ Clear text instantly for a fresh start</div>
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              
            >
              About the Creator 🚀👨‍💻
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" >
              Hey there! I'm a Computer Science engineering student who loves
              turning caffeine into code. ☕💻 I built TextUtils because, let's
              be honest, who has time for messy text? This tool helps you shout
              in UPPERCASE, whisper in lowercase, clean up extra spaces, copy
              text effortlessly, and hit reset when things get too chaotic. 🔄✨
              I geek out over React, JavaScript, C++, and all things tech,
              always on the lookout for new ways to make life a little easier
              (and a lot cooler). Stay tuned—more awesome projects coming soon!
              🚀🔥
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              
            >
              Get in touch with me😎
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" >
              <div><a href="https://www.instagram.com/varshad_potle" target="_blank" style={{ color: "black", textDecoration: "none" , display: "flex", alignItems: "center", gap: "5px" }}><FaInstagram /> Instagram</a></div>
              <div><a href="https://www.linkedin.com/in/varshad-potle-6bb821282/ " target="_blank" style={{ color: "black" , textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }} > <FaLinkedin /> LinkedIn</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
