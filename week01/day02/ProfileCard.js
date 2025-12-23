import "./ProfileCard.css";
import image from './assets/image copy 2.png';

function Profile(){
    return (
        <div className = "profile">
        <h2>ProfileCard</h2>
        <ProfileCard />
        </div>
    );
}
function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image"/>
      <h2 className="profile-name">Kiruthiga Palani</h2>
      <h4 className="profile-title">FullStack Developer</h4>
      <p className="profile-bio">
        I am a passinate Developer in the FullStack domain.</p>
    </div>
  );
}

export default Profile;
