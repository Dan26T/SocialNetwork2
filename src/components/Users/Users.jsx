import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = React.memo(props => {
    return <div>
        <Paginator currentPage={props.activePage} totalItemsCount={props.totalCount}
                   onPageChanged={props.onPageChanged} pageSize={props.pageSize} portionSize={10} />

        <br></br>
        <br></br>

        <div>{
            props.users.map(u => <User key={u.id}
                user={u} isFollowing={props.isFollowing} follow={props.follow} unfollow={props.unfollow}/>
            )
        }
        </div>
    </div>
})

export default Users
