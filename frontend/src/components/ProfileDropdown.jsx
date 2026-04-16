/** @format */

import "./styles/ProfileDropdown.css";

<<<<<<< HEAD
const ProfileDropdown = ({ user, onEdit, onLogout, onClose }) => {
=======
const ProfileDropdown = ({ user, onEdit, onSettings, onLogout, onClose }) => {
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
  return (
    <div className="profile-dropdown" role="menu" aria-label="Profile options">
      <div className="profile-top">
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt="Avatar" />
        ) : (
          <div className="avatar-md">{(user?.fullName || "U").charAt(0)}</div>
        )}
        <div className="profile-meta">
          <div className="name">{user?.fullName}</div>
          <div className="email">{user?.email}</div>
        </div>
      </div>

      <ul className="profile-actions">
        <li
          onClick={() => {
            onEdit();
          }}
        >
          <span>Profile</span>
        </li>
        <li
<<<<<<< HEAD
=======
          onClick={() => {
            onSettings();
          }}
        >
          <span>Settings</span>
        </li>
        <li
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
          className="danger"
          onClick={() => {
            onLogout();
          }}
        >
          <span>Logout</span>
        </li>
      </ul>

      <button className="close-dd" onClick={onClose} aria-label="Close">
        Close
      </button>
    </div>
  );
};

export default ProfileDropdown;
