import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Vérifie la présence du cookie 'cookieConsent' à chaque rafraîchissement
    const cookieConsent = Cookies.get("cookieConsent");

    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const acceptCookies = async () => {
    // Définir un cookie pour un an
    Cookies.set("cookieConsent", "true", { expires: 365, path: "/" }); // path ajouté pour être sûr que le cookie est global sur le site
    setShowPopup(false);

    // Récupérer l'IP et le userAgent de l'utilisateur
    const ip = await getIP();
    const userAgent = navigator.userAgent;

    // Envoyer les informations de l'utilisateur au backend
    await registerVisitor(ip, userAgent);
  };

  const getIP = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };

  const registerVisitor = async (ip, userAgent) => {
    try {
      await fetch("http://localhost:5000/visitors/track-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip, userAgent }),
      });
    } catch (error) {
      console.error("Error while registering visitor:", error);
    }
  };

  return (
    showPopup && (
      <div style={styles.popup}>
        <p>Nous utilisons des cookies pour améliorer votre expérience.</p>
        <button onClick={acceptCookies} style={styles.button}>
          Accepter
        </button>
      </div>
    )
  );
};

const styles = {
  popup: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    background: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default CookieConsent;


