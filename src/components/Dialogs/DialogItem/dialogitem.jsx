import s from './dialogitem.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return <div className={s.dialog}>
  <img src={props.img} alt='Ava'/>
  <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
  </div>
}


export default DialogItem;
