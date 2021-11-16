import React from 'react';

function NavBar() {
    return <div className="nav-bar">
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>New Question</a>
            </li>
            <li>
                <a href='/'>Leader Board</a>
            </li>
        </ul>
    </div>
}

export default NavBar;