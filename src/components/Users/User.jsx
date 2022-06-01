import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";


const User = React.memo(({user, isFollowing, follow, unfollow}) => {
    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}><img
                            src={user.photos.small != null ? user.photos.small : 'https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg'}
                            className={styles.img} alt='User ava'/></NavLink>
                        </div>
                     <div>
            {!user.followed ? <button disabled={isFollowing.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)}}>Follow</button>
                : <button disabled={isFollowing.some(id => id === user.id)}
                          onClick={() => {unfollow(user.id)}}>Unfollow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{'user.status'}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
            </div>
    )
})

export default User
