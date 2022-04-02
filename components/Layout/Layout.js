import NavBar from "./NavBar";
import styles from "./Layout.module.css"
import Sidebar from "./Sidebar";
import { useState } from "react";

function Layout(props){
    const [navBar,setNavBar]=useState(false);

    const mobileNavHandler=()=>{
        setNavBar(!navBar);
    }

    return(
        <div>
            <NavBar mobileNavHandler={mobileNavHandler}></NavBar>
            <div className={styles.sb}>
                <Sidebar navBar={navBar}></Sidebar>
                <main className={styles.main}>{props.children}</main>
            </div>
        </div>
    )
}

export default Layout;