import "../styles/Button.css";

export default function Button() {
  return (
    <>
      <div className="button_container">
        <button className="button">
          <img
            src="../assets/cookie-aux-fines-chips.png"
            alt="cookies"
            className="button-image"
          />
        </button>
        <button className="button">
          <img
            src="../assets/bulle.png"
            alt="chatbot"
            className="button-image"
          />
        </button>
      </div>
    </>
  );
}
