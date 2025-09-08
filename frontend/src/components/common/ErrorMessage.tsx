import type { ErrorMessage } from "../../services/postsService";

export default function ErrorMessage({error}: ErrorMessage) {
  return (
    <section className="error-message">
      <img src="images/error-icon.png" alt="error icon" />
      <h2>Failed</h2>
      <p>{error}</p>
    </section>
  );
}
