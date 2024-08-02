import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.boxFriend}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.colorOnline}>Online</p>
      ) : (
        <p className={css.colorOffline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
