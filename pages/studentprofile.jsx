import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import st from '../styles/profile.module.css'

const Profile = () => {
    return (
        <div>
            <Head>
                <title>Student Profile</title>
            </Head>
            <Header />
            <div className={st.profileImgBox}>
                <img className={st.profileCover} src="./tutorProfileCover.svg" alt="" />
                <img className={st.profileDP} src="./tutorProfileDP.svg" alt="" />
            </div>
            <div className={st.profileTextDetails}>
                <h1>Tufayel Khan</h1>
                <h6>Students</h6>
                <button className='orgBtn'>Your tutors</button>
            </div>
            <div className="box">
                <div className={st.inputGrid}>
                    <main>
                        <label htmlFor="">From</label>
                        <input type="text" className='landingInput' />
                    </main>
                    <main>
                        <label htmlFor="">Level</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">Beginner</option>
                            <option value="">Intermediate</option>
                            <option value="">Advance</option>
                        </select>
                    </main>
                    <main>
                        <label htmlFor="">Corrections</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">After every mistake</option>
                            <option value="">After every mistake</option>
                            <option value="">After every mistake</option>
                        </select>
                    </main>
                    <main>
                        <label htmlFor="">Goals</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">Wants to learn English</option>
                            <option value="">Wants to learn English</option>
                            <option value="">Wants to learn English</option>
                        </select>
                    </main>
                    <main>
                        <label htmlFor="">Current Focus</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">Professional Development</option>
                            <option value="">Professional Development</option>
                            <option value="">Professional Development</option>
                        </select>
                    </main>
                    <main>
                        <label htmlFor="">Interests</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">Reading</option>
                            <option value="">Reading</option>
                            <option value="">Reading</option>
                        </select>
                    </main>
                    <main className={st.textareaCell}>
                        <label htmlFor="">Bio</label>
                        <textarea className='landingInput' />
                    </main>
                    <main className={st.textareaCell}>
                        <label htmlFor="">Comfort Level</label>
                        <select name="" id="" className='landingInput' >
                            <option value="">Confident</option>
                            <option value="">Confident</option>
                            <option value="">Confident</option>
                        </select>
                    </main>

                </div>
                <button className={`${st.saveprofileBtn} orgBtn`}>SAVE</button>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
