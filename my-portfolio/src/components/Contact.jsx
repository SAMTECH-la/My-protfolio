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
    <section id="contact">
      <h2 className="section-title text-center">Contact</h2>
      <div className="container mt-4 d-flex justify-content-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#0a0a23",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="mb-3">
            <label
              htmlFor="user_name"
              style={{ color: "#64ffda", fontWeight: "bold" }}
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
                border: "1px solid #64ffda",
                backgroundColor: "#0f172a",
                color: "white",
                marginTop: "6px",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="user_email"
              style={{ color: "#64ffda", fontWeight: "bold" }}
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
                border: "1px solid #64ffda",
                backgroundColor: "#0f172a",
                color: "white",
                marginTop: "6px",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              style={{ color: "#64ffda", fontWeight: "bold" }}
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
                border: "1px solid #64ffda",
                backgroundColor: "#0f172a",
                color: "white",
                marginTop: "6px",
                resize: "none",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#64ffda",
              color: "#0a0a23",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4cd3b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#64ffda")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
