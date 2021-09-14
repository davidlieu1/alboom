import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <header>
            <nav>
                <ul>
                    <div> alboom </div>
                    <Link to='/'> home page</Link>
                    <Link to='/first'> first page</Link>
                    <Link to='/second'> second page</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;