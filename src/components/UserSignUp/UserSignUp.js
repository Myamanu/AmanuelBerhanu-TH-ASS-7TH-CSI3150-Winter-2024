import React, { useState } from "react";
import "./UserSignUp.css";
//The 'UserSignUp'form component manages form state using the useState hook.
const UserSignUp = () => {
  // State to store user input(Each input field has a corresponding state property (fullName, username, etc.))
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  //The handleSubmit function is event handler and logs the user inputs to the console when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User inputs:", formData);
  };

  // The handleInputChange function is event handler and updates the state when input values change.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>User Sign Up Form 18+</h3>
      <h5>Fill the Correct Information Please and Thank You:</h5>
      <form class="submitSection" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="sample"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Desired Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="sample"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address here"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+1-123-457-8910"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignUp;
