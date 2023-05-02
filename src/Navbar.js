import './index.css';
const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="Links">
                <a href="/">HOME</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>      );
}
 
export default Navbar;