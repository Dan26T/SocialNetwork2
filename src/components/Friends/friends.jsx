import Friend from './FriendItem/friends';

const Friends = (props) => {
    debugger
    let friensTitle = props.friends.map((friend) => {
        return <Friend id={friend.id} key={friend.id} name={friend.name} img={friend.img}/>
    })

    return <div>
        <div>
            {friensTitle}
        </div>
    </div>

}

export default Friends;
