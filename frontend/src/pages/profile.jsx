import React, { useEffect, useState } from "react";
import "../Css/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);

  // Simulate fetching user data from backend
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    // Dummy data (replace with API call later)
    const dummyUser = {
      name: "Ali Khan",
      email: "ali@example.com",
      bio: "Full Stack Developer passionate about learning new technologies.",
      joined: "March 2024",
    };

    const dummySkills = [
      { id: 1, name: "Web Development", level: "Expert", category: "Development" },
      { id: 2, name: "Graphic Design", level: "Intermediate", category: "Design" },
      { id: 3, name: "Content Writing", level: "Beginner", category: "Writing" },
    ];

    setUser(dummyUser);
    setSkills(dummySkills);
  }, []);

  if (!user) return <div className="profile-loading">Loading profile...</div>;

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <p className="joined">Joined: {user.joined}</p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-header">
          <h3>My Skills</h3>
          <button className="btn-add-skill">+ Add Skill</button>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h4>{skill.name}</h4>
              <p>Level: {skill.level}</p>
              <span className="category">{skill.category}</span>
              <div className="skill-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trade Summary Section */}
      <section className="summary-section">
        <h3>Trade Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <h4>Active Trades</h4>
            <p>3</p>
          </div>
          <div className="summary-card">
            <h4>Completed Trades</h4>
            <p>7</p>
          </div>
          <div className="summary-card">
            <h4>Total Skills</h4>
            <p>{skills.length}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
