import React, { useState } from "react";

import { register } from "../api/services/auth.js";

const Home = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [occupation, setOccupation] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    console.log("event ");
    register(
      name,
      displayName,
      profilePic,
      email,
      password,
      location,
      occupation
    ).then((res) => {
      console.log(" res ", res);
    });
    alert(`${name} ${email} submitted`);
  };

  return (
    <div>
      <h1>Welcome Enter User Here</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label>name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>profile_pic</label>
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />

          <label>email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>occupation</label>
          <input
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />

          <label>display_name</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
