import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { NavLink, useHistory } from "react-router-dom";
import { firebaseApp as firebase } from '../../config/config';
// import { AuthContext } from '../../Context/Authentication';

const Header = (props) => {
    const { user } = props;

    const [isDropdown, setIsDropdown] = useState(false);
    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    }
    const history = useHistory();

    async function handleLogout() {
        await firebase.auth().signOut();
        setIsDropdown(false);
        history.replace('/');
    }

    return (
        <>
            <div className={styles.Navbar}>
                <div className={styles.Title}>Pro Organizer</div>

                <div className={styles.NavItemContainer}>
                    <NavLink exact to="/" activeClassName={styles.Active}>
                        <div className={styles.NavItem}>Home</div>
                    </NavLink>
                    <NavLink to="/createboard" activeClassName={styles.Active}>
                        <div className={styles.NavItem}>Create a Board</div>
                    </NavLink>

                    {user ?
                        (
                            <>
                                {/* <NavLink to="/createboard" activeClassName={styles.Active}>
                                    <div className={styles.NavItem}>Create a Board</div>
                                </NavLink> */}
                                <li className={styles.anchor} onClick={toggleDropdown}>
                                    <div className={styles.NavItem}>{user.email}</div>
                                </li>
                            </>
                        ) :
                        (
                            <>
                                <NavLink activeClassName={styles.Active} to="/login">
                                    <div className={styles.NavItem}>Login</div>
                                </NavLink>

                                {/* <NavLink activeClassName={styles.Active} to="/signup">
                                    <div className={styles.NavItem}>Sign Up</div>
                                </NavLink> */}
                            </>
                        )
                    }
                </div>
                {isDropdown && (
                    <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownItem} onClick={handleLogout}>
                            Logout
                      </div>
                    </div>
                )}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);