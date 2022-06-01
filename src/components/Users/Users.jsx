import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const Users = React.memo(props => {
    return <div>
        <Paginator currentPage={props.activePage} totalItemsCount={props.totalCount}
                   onPageChanged={props.onPageChanged} pageSize={props.pageSize} portionSize={10} />

        <br></br>
        <br></br>
        {
            props.users.map(u => <div key={u.id}>
            <span>
            <div>
            <NavLink to={'/profile/' + u.id}><img
                src={u.photos.small != null ? u.photos.small : 'https://png.pngtree.com/element_our/png_detail/20181206/avatar-vector-icon-png_262117.jpg'}
                className={styles.img}/></NavLink>
            </div>
            <div>
            {!u.followed ? <button disabled={props.isFollowing.some(id => id === u.id)}  onClick={() => {
                    props.follow(u.id)
                }
                }>Follow</button>
                : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                }
                }>Unfollow</button>}</div>
            </span>
                    <span>
            <span>
            <div>{u.name}</div>
            <div>{'u.status'}</div>
            </span>
            <span>
             <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
            </span>
            </span>
                </div>
            )
        }
    </div>
})

export default Users
