import React from "react";
import './Nav.css';

export default function Navbar() {
    return(
    <div>
        <nav className="navbar">
            <i className="navHome active fa-solid fa-house" />{ /* Home */}
            <i className="navAbout fa-solid fa-building" />{ /* About */}
            <i className="navService fa-solid fa-book-open" />{ /* Services */}
            <i className="navBlog fa-solid fa-blog" />{ /* Blogs */}
            <i className="navContact fa-solid fa-address-book" />{ /* Contact Us */}
        </nav>
    </div>
    );
}