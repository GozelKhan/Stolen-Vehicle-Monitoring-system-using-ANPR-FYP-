/** @format */
import "../styles/Auth.css";
<<<<<<< HEAD
export default function InputField({ label, type, value, onChange, name, placeholder, style }) {
=======
<<<<<<< HEAD
export default function InputField({ label, type, value, onChange, name, placeholder, style }) {
  return (
    <div className="">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={style}
=======
export default function InputField({ label, type, value, onChange, name }) {
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
  return (
    <div className="">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
<<<<<<< HEAD
        style={style}
=======
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
      />
    </div>
  );
}
