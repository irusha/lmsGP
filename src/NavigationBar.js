import './App.css'



export default function () {
    return (
        <nav className="navbar2">
            <div className="logo">LMS</div>
            <ul className="nav-links">

                <div className="menu2">
                    <li><a href="/">A. L. Jayasingha</a></li>
                    <li><a href="/">Study Room</a></li>
                    <li id="lastOption"><a href="/">Sign Out</a></li>
                </div>
            </ul>


            <span className="material-symbols-outlined menubutton" id='menuB' onClick={expandMenu}>
                menu
            </span>

            <div class="dropdown-content" id='dropDown'>
                <p href="#">A.L. Jayasingha</p>
                <p href="#">Study Room</p>
                <p href="#">Sign Out</p>
            </div>

            

        </nav>
    )
}

let isMenuExpanded = false

function expandMenu(){
    var dropDownMenu = document.getElementById('dropDown')
    var menuB = document.getElementById('menuB')
    
    if(isMenuExpanded){
        dropDownMenu.setAttribute("style", "display:none")
        menuB.textContent = "menu"
    }
    else{
        dropDownMenu.setAttribute("style", "display:block")
        menuB.textContent = "close"
    }

    isMenuExpanded = !isMenuExpanded
}
