import styles from "./Sidebar.module.css"
import {useRouter} from 'next/router';
import Link from "next/link";

function Sidebar(){
    const router=useRouter()
    console.log(router.pathname)

    const nav=[
        {
            image:'./Home.png',
            imageDark:'./Home.png',
            title:'Home',
            route:'/TeacherHome'
        },
        {
            image:'./profile.png',
            imageDark:'./profile.png',
            title:'Profile',
            route:'/TeacherProfile'
        },
        {
            image:'./tutors.png',
            imageDark:'./tutors.png',
            title:'Tutors',
            route:'/TeacherTutors'
        },
        {
            image:'./library.png',
            imageDark:'./library.png',
            title:'Library',
            route:'/TeacherLibrary'
        },
        {
            image:'./QuizDark.png',
            imageDark:'./Quiz.png',
            title:'Quiz',
            route:'/TeacherQuiz'
        },
        {
            image:'./teachingOrder.png',
            imageDark:'./teachingOrder.png',
            title:'Teaching order',
            route:'/TeacherTeaching'
        },
        {
            image:'./chat.png',
            imageDark:'./chat.png',
            title:'Chat',
            route:'/TeacherChat'
        },
        {
            image:'./Spendings.png',
            imageDark:'./Spendings.png',
            title:'Spending',
            route:'/TeacherSpending'
        }
    ]

    const setting=[
        {
            image:'./support.png',
            title:'Support',
            route:'/Support'
        },
        {
            image:'./setting.png',
            title:'Setting',
            route:'/Setting'
        },
        {
            image:'./logout.png',
            title:'Logout   ',
            route:'/Logout'
        },{
            image:'./info.png',
            title:'Info',
            route:'/Info'
        },
    ]



    return(
        <div className={styles.Sidebar}>
            <div className={styles.sbNav}>
                {nav.map((li)=>{
                    return(
                    <div key={''} className={router.pathname === li.route?styles.active:styles.inactive}>
                        <Link href={li.route}>
                            <a>
                            <div className={styles.imgdiv}>
                                <img alt="" src={router.pathname === li.route?li.imageDark:li.image}/>
                            </div>
                            <h1>{li.title}</h1>
                            </a>
                        </Link>
                    </div>
                    )
                })}
                
            </div>

            <div className={styles.setting}>
            <div className={styles.sbNav2}>
                {setting.map((li)=>{
                    return(
                        <div key={''}>
                            <div className={styles.imgdiv}>
                                <img alt="" src={li.image}/>
                            </div>
                            <h1>{li.title}</h1>
                        </div>
                    )
                })}
                
            </div>
            </div>
        </div>
    )
}

export default Sidebar