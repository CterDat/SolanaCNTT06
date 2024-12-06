import React from 'react';
import '../../css/style.css';
// import '../../css/plugins.css'; // Assuming you have Link CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';

const Footer = () => {
    return (
        <footer className="ht-footer">
            <div className="container">
                <div className="flex-parent-ft">
                    <div className="flex-child-ft item1">
                        <Link to="index.html">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                        <p>5th Avenue st, Manhattan<br />New York, NY 10001</p>
                        <p>Call us: <Link to="#">(+01) 202 342 6789</Link></p>
                    </div>
                    <div className="flex-child-ft item2">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Blockbuster</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Forums</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Help Center</Link></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item3">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Security</Link></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item4">
                        <h4>Account</h4>
                        <ul>
                            <li><Link to="#">My Account</Link></li>
                            <li><Link to="#">Watchlist</Link></li>
                            <li><Link to="#">Collections</Link></li>
                            <li><Link to="#">User Guide</Link></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item5">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your email..." />
                        </form>
                        <Link to="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></Link>
                    </div>
                </div>
            </div>
            <div className="ft-copyright">
                <div className="ft-left">
                    <p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
                </div>
                <div className="backtotop">
                    <p><Link to="#" id="back-to-top">Back to top <i className="ion-ios-arrow-thin-up"></i></Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;