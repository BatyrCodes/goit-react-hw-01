import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <li className={css.item} key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
