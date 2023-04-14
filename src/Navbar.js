import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The social blog</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/Create">Create</Link>
                <Link to="/new"
                  style={{
                    backgroundColor: '#f1356d',
                    color: 'white',
                    borderRadius: '10px',
                }}
                >new-blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;