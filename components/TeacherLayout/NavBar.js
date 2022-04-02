import styles from "./Layout.module.css"

function NavBar(props){

    const showMobileNavbar=()=>{
        props.mobileNavHandler();
    }


    return(
        <div className={styles.navbar}>
            <div className={styles.logoDiv}>
                <img alt="" src="./TUTORS ONLINE-logo 2.svg"/>
                <img onClick={showMobileNavbar} alt="" src="./Group 208.svg"/>
            </div>
            <div className={styles.searchDiv}>
                <input className={styles.seachInput} type="text" placeholder="Search"></input>
                <img alt="" className={styles.seacrhImage} src="./Icon awesome-search.png"/>
                <div className={styles.notification}>
                    <img alt="" className={styles.bellIcon} src="./Group 206.png"/>

                    <img alt="" className={styles.profilePic} src='Repeat Grid 1.png'/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;