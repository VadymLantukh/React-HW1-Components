import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.userCard}>
      <div className={css.userBox}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li className={css.userStatsItem}>
          <span className={css.userStatsText}>Followers</span>
          <span className={css.userStatsQua}>{followers}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsText}>Views</span>
          <span className={css.userStatsQua}>{views}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsText}>Likes</span>
          <span className={css.userStatsQua}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
