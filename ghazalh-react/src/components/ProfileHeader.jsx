function ProfileHeader() {
  return (
    <div className="profile-header">
      <img
        src="https://i.imgur.com/6VBx3io.png"
        className="avatar"
        alt="profile"
      />

      <div>
        <h1>Ghazala Mohammadi</h1>
        <p className="username">@Ghazala77</p>

        <div className="buttons">
          <button className="btn primary">Edit Profile</button>
          <button className="btn secondary">Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
