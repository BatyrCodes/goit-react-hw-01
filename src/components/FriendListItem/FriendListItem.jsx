import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendItem}>
      <img className={css.avatar} src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
      <span className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default FriendListItem;
