const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__logo">Portfolio</h1>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="#hero" className="navbar__link">Home</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#experience" className="navbar__link">Experience</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#projects" className="navbar__link">Projects</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#contact" className="navbar__link">Contact</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#academics" className="navbar__link">Academics</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#acheivements" className="navbar__link">Acheivements</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#skills" className="navbar__link">Skills</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;