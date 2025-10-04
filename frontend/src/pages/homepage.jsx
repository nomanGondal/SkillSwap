import { Link } from "react-router-dom";
import "./homepage.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to SkillSwap</h1>
        <p>Exchange skills and projects without money. Trade value, grow together.</p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn secondary">Login</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>How SkillSwap Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Skill ↔ Skill</h3>
            <p>Trade your skill with someone else. e.g., Web Dev for Graphic Design.</p>
          </div>
          <div className="feature-card">
            <h3>Project ↔ Project</h3>
            <p>Swap project work. e.g., Blog writing for YouTube video editing.</p>
          </div>
          <div className="feature-card">
            <h3>Skill ↔ Project</h3>
            <p>Offer a skill in exchange for a project. e.g., Python lessons for flyer design.</p>
          </div>
          <div className="feature-card">
            <h3>Project ↔ Skill</h3>
            <p>Get your project done by offering a skill in return. e.g., Website for video editing lessons.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Swap Skills?</h2>
        <p>Join our community and start exchanging skills today.</p>
        <Link to="/signup" className="btn primary">Join Now</Link>
      </section>
    </div>
  );
};

export default Home;
