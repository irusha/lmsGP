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
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}