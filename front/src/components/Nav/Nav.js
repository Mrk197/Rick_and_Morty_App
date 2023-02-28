import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import {NavLink} from "react-router-dom"

export default function Nav({agregar, randomCharacter,logout}) {
    return <div className={styles.divNav}>
        <div className={styles.navLeft}>
          
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}><span>Home</span></NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}><span>About</span></NavLink>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}><span>Favorites</span></NavLink>
            <NavLink to="/logout" className={({ isActive }) => (isActive ? styles.active : styles.inactive)} onClick={logout}><span>Logout</span></NavLink>
          
        </div>
        <div className={styles.navRigth}>
        <SearchBar
          onSearch={agregar}
        />
        <button onClick={randomCharacter} className={styles.btnRandom}>Random</button>
        </div>
    </div>
}