import "./style.css";

function UserProfile({ userEmail, userImage }) {
  return (
    <div className="header-user">
      <i className="profile-icon">
        <img src={userImage} alt="프로필 이미지" />
      </i>
      <span className="mobile-blind">{userEmail}</span>
    </div>
  );
}

export default UserProfile;
