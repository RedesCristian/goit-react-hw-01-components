import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <div className={css.listContainer}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li key={id} className={css.item}>
            <span className={css.status}>{isOnline}</span>
            <img
              className={css.avatar}
              src={avatar}
              alt="{{name} avatar}"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </div>
  );
};

export default FriendListItem;
