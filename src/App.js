import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import NewsCard from './componrnts/NewsCard/NewsCard';
import Home from './componrnts/Home/Home';
import NavBar from './componrnts/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Contact from './componrnts/Contact/Contact';
import Swiper from 'swiper';
import 'swiper/css';
import Footer from './componrnts/Footer/Footer';

// this is alan sdk key 
const alanKey = 'b32e2a27099709684e14d730e8b02add2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const[newsArticles , setNewsArticles] = useState([]);
  const[activeArticle,setActiveArticle] = useState(0);


  useEffect( ()=>{
    alanBtn({
     key:alanKey,
     onCommand:({ command,articles })=>{
          if(command === 'newHeadlines'){
            setNewsArticles(articles);
          }else if(command === 'highlight'){
            setActiveArticle((prevActiveArticle) =>prevActiveArticle +1);
          }
     }
    })
  } ,[])
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

      <NewsCard newsArticles={newsArticles} activeArticle={activeArticle}/>
      <Footer/>
    </div>
  );
}

export default App;
