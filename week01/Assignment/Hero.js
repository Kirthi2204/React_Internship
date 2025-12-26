import profilePic from '../assets/profile.jpg'; 

function Hero({ name, tagline }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
        <div className="hero-right">
          <h1>{name}</h1>
          <p>{tagline}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
