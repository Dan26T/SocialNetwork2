import s from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}>Massages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <br/><br/>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <br/><br/>

        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
    </nav>
}

export default Nav;