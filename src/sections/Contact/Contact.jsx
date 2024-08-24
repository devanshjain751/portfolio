import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>Contact</h2>
      <div
        className="visme_d"
        data-title="FORM1"
        data-url="rx7rg816-form1"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="89528"
        style={{
          overflow: "hidden",
          minHeight: "500px",
          height: "auto",
        }}
      ></div>
    </div>
  );
}

export default Contact;
