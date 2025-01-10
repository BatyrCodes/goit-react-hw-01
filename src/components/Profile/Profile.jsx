import css from "./Profile.module.css";
function Profile({ image, name, tag, location, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt="Profile Avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.mail}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.userInfo__list}>
          <li className={css.userInfo__item}>
            <span className={css.userInfo__label}>Followers</span>
            <span className={css.userInfo__value}>{stats.followers}</span>
          </li>
          <li className={`${css.userInfo__item} ${css.extraLineGray}`}>
            <span className={css.userInfo__label}>Views</span>
            <span className={css.userInfo__value}>{stats.views}</span>
          </li>
          <li className={css.userInfo__item}>
            <span className={css.userInfo__label}>Likes</span>
            <span className={css.userInfo__value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
