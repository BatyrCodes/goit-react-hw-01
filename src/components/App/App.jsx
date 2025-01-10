import Profile from "../Profile/Profile";

import "./App.css";

import userData from "../JSON/userData.json";
import friends from "../JSON/friends.json";

import FriendList from "../FriendList/FriendList";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
