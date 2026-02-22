// src/SubmitButton.jsx
export default function SubmitButton() {
  return (
    <button disabled onClick={() => console.log('Saved!')}>
      Save Data
    </button>
  );
}