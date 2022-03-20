import NavBar from "./NavBar";
import styles from "./Layout.module.css"
import Sidebar from "./Sidebar";

function Layout(props){
    return(
        <div>
            <NavBar></NavBar>
            <div className={styles.sb}>
                <Sidebar></Sidebar>
                <main className={styles.main}>{props.children}</main>
            </div>
        </div>
    )
}

export default Layout;