import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n5sykpk", // 🔹 replace with your EmailJS service ID
        "template_2smd1dk", // 🔹 replace with your EmailJS template ID
        form.current,
        "xOoUj_G_o3u_3WB-B" // 🔹 replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again!");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #4B0082, #6A0DAD)", // Same gradient as Hero
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        className="section-title"
        style={{
          color: "#FFD700", // Gold heading like Hero
          marginBottom: "40px",
        }}
      >
        Contact
      </h2>

      <div className="container d-flex justify-content-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.1)", // translucent card
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            border: "2px solid #FFD700", // gold border
          }}
        >
          <div className="mb-3 text-start">
            <label
              htmlFor="user_name"
              style={{ color: "#FFD700", fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #FFD700",
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                marginTop: "6px",
              }}
            />
          </div>

          <div className="mb-3 text-start">
            <label
              htmlFor="user_email"
              style={{ color: "#FFD700", fontWeight: "bold" }}
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #FFD700",
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                marginTop: "6px",
              }}
            />
          </div>

          <div className="mb-3 text-start">
            <label
              htmlFor="message"
              style={{ color: "#FFD700", fontWeight: "bold" }}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #FFD700",
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                marginTop: "6px",
                resize: "none",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#FFD700",
              color: "#4B0082",
              fontWeight: "bold",
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "1rem",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#4B0082";
              e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "#4B0082";
              e.target.style.boxShadow = "none";
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
