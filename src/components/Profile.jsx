import React from 'react';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="list">
          <span className="label">Followers{stats.followers}</span>
          <span className="quantity"></span>
        </li>
        <li className="list">
          <span className="label">Views{stats.views}</span>
          <span className="quantity"></span>
        </li>
        <li className="list">
          <span className="label">Likes{stats.likes}</span>
          <span className="quantity"></span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
