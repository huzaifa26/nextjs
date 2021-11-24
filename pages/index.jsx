import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { setTitle } from "../redux/actions/main"
import { getTodoData } from './api/MockApi'
import { en } from '../locales/en'
import { fr } from '../locales/fr'

import styles from '../styles/Home.module.css'

function Home() {

  const [id , setId] = useState();
  const [language, setLanguage] = useState('');

  const title = useSelector(state => state.main.title);
  const dispatch = useDispatch();

  const t = language === 'en' ? en : fr;

  useEffect(() => {
    const language= localStorage.getItem('language');
    if(language){
      setLanguage(language);
    }else{
      localStorage.setItem('language','en');
      setLanguage('en');
    }
  },[])

  const clickHandler = async () => {
    const data = await getTodoData(id);
    dispatch(setTitle(data?.data?.title))
  }

  return (
    <div className={styles.container}>
      <h1>{t.title}</h1>
      <p>Enter id to get title:</p>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)}>
      </input>
      <button onClick={() => clickHandler()}>
        Submit
      </button>
      <h1>Title: {title}</h1>
    </div>
  )
}

export default Home