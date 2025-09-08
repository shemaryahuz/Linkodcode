import "../../styles/errorDisplay.css";

type ErrorDisplayProps = {
  error: string;
}

export default function ErrorDisplay({error}: ErrorDisplayProps) {
  return (
    <section className="error-message">
      <img src="images/error-icon.png" alt="error icon" />
      <h2>Failed</h2>
      <p>{error}</p>
    </section>
  );
}
