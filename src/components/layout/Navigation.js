import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to='/'>alboom</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/first'> first</Link>
                    </li>
                    <li>
                        <Link to='/second'> second</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;