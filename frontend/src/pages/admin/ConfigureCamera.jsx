/** @format */
import { useState } from "react";
import "../../styles/Complain.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ConfigureCamera() {
  const [formData, setFormData] = useState({
    cameraID: "",
    rtspURL: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    console.log("Configure Submitted:", formData);
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
>>>>>>> 4518809402808e6ca5db71f9c83e1773a55a49d8
    alert("Configure submitted successfully!");
    // reset form
    setFormData({
      cameraID: "",
      rtspURL: "",
    });
  };

  return (
    <div className="complaint-container">
      <h2>Connect with IP Camera</h2>
      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <InputField
              label="Camera ID"
              type="text"
              placeholder="ISB-CAM-01"
              name="cameraID"
              value={formData.cameraID}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <InputField
              label="RTSP URL"
              placeholder="rtsp://admin:police123@192.168.10.55:554/Streaming/Channels/1"
              type="text"
              name="rtspURL"
              value={formData.rtspURL}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button label="Connect" type="submit" />
      </form>
    </div>
  );
}
