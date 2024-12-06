import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Nếu bạn có CSS riêng cho Navbar
import '../../css/style.css';
import './NavBar.css';
import logo from '../../images/logo1.png';

const Navbar = ({ user, onLogout }) => {
    return (
        <header className="ht-header">
            <div className="custom-container">
                <nav className="navbar navbar-default navbar-custom">
                    <div className="navbar-header logo">
                        <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Link to="/">
                            <img className="logo" src={logo} alt="" width="119" height="58" /> {/* Sử dụng biến logo */}
                        </Link>

                    </div>
                    <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav flex-child-menu menu-left">
                            <li className="hidden">
                                <Link to="#page-top"></Link>
                            </li>
                            <li className="">
                                <Link className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown" to="/add-movie">
                                    Add Movies
                                </Link>
                            </li>
                            <li className="dropdown first">
                                <Link className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown" to="/booking-history">
                                    History <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="dropdown-menu level1">
                                    <li><Link to="/celebritygrid01">celebrity grid 01</Link></li>
                                    <li><Link to="/celebritygrid02">celebrity grid 02</Link></li>
                                    <li><Link to="/celebritylist">celebrity list</Link></li>
                                    <li className="it-last"><Link to="/celebritysingle">celebrity single</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown first">
                                <Link className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    news <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="dropdown-menu level1">
                                    <li><Link to="/bloglist">blog List</Link></li>
                                    <li><Link to="/bloggrid">blog Grid</Link></li>
                                    <li className="it-last"><Link to="/blogdetail">blog Detail</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown first">
                                <Link className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    community <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="dropdown-menu level1">
                                    <li><Link to="/userfavoritegrid">user favorite grid</Link></li>
                                    <li><Link to="/userfavoritelist">user favorite list</Link></li>
                                    <li><Link to="/userprofile">user profile</Link></li>
                                    <li className="it-last"><Link to="/userrate">user rate</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-child-menu menu-right">
                            <li className="dropdown first">
                                <Link className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                    pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="dropdown-menu level1">
                                    <li><Link to="/landing">Landing</Link></li>
                                    <li><Link to="/404">404 Page</Link></li>
                                    <li className="it-last"><Link to="/comingsoon">Coming soon</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#">Help</Link></li>
                            {!user ? ( // Kiểm tra nếu user không tồn tại
                                <>
                                    <li className="loginLink"><Link to="/login">LOG In</Link></li>
                                    <li className="btn signupLink"><Link to="/register">sign up</Link></li>
                                </>
                            ) : ( // Nếu user đã đăng nhập
                                <li className="logoutLink">
                                    <button onClick={onLogout}>Log Out</button> {/* Nút đăng xuất */}
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>

                {/* Top search form */}
                <div className="top-search">
                    <select>
                        <option value="united">TV show</option>
                        <option value="saab">Others</option>
                    </select>
                    <input type="text" placeholder="Search for Link movie, TV Show or celebrity that you are looking for" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;