import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <Link className="navbar-brand" to="/">Image Gallery</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <Menu />
            </div>
        </nav>
    )
}

export default Header