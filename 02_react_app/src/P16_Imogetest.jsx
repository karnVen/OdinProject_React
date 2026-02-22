// src/Spinner.jsx
export default function Spinner() {
  return (
    // We add the secret nametag here because there is no text for the test to read!
    <div data-testid="loading-spinner" className="spinner-animation">
      🌀
    </div>
  );
}