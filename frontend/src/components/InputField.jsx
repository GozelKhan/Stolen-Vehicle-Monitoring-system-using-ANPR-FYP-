/** @format */
import "../styles/Auth.css";
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
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
      />
    </div>
  );
}
