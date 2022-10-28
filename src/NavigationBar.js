import './App.css'

export default function () {
    return (
        <nav className="navbar2">
            <div className="logo">LMS</div>
            <ul className="nav-links">

                <div className="menu2">
                    <li><a href="/">A. L. Jayasingha</a></li>
                    <li><a href="/">Study room</a></li>
                    <li id="lastOption"><a href="/">Sign Out</a></li>
                </div>
            </ul>
            <button className='navbar-toggler'  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            <span className="material-symbols-outlined menubutton ">
                menu
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}