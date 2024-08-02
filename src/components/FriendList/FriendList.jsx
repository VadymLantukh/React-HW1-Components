import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={ css.list}>
      {friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
