import "../../styles/common/errorDisplay.css";

type ErrorDisplayProps = {
  error: string;
}

export default function ErrorDisplay({error}: ErrorDisplayProps) {
  return (
    <section className="page error-message">
      <img src="images/error-icon.png" alt="error icon" />
      <h2>Failed</h2>
      <p>{error}</p>
    </section>
  );
}
