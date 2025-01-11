import Profile from "../Profile/Profile";

import "./App.css";

import userData from "../JSON/userData.json";
import friends from "../JSON/friends.json";
import transactions from "../JSON/transactions.json";

import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

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
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
