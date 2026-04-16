/** @format */
import "../styles/Auth.css";
<<<<<<< HEAD
import Loader from "./Loader";
export default function Button({
  label,
  onClick,
  type = "button",
  style,
}) {
=======
export default function Button({ label, onClick, type = "button" }) {
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
  return (
    <button
      onClick={onClick}
      type={type}
<<<<<<< HEAD
      style={style}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
    >
      {label}
    </button>
  );
}
