
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import QuizList from './pages/quiz-list';
import { router } from './routes/routes';
import Quiz from './components/quiz';
import Navbar from './components/navbar';
import Instruction from './components/instruction';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import Faq from './pages/FAQ';
import { useState,createContext } from 'react';

export const StartBtnContext = createContext()

 const quizList = [
  {
    path: router.dashBoard ,
    component: <Dashboard/>
  },
  {
    path: router.instruction ,
    component: <Instruction/>
  },
  {
    path:router.quiz ,
    component: <QuizList/>
  },
  {
    path:router.quizStart ,
    component: <Quiz/>
  },
  {
    path:router.about ,
    component: <About/>
  },
  {
    path:router.contact ,
    component: <Contact/>
  },
  {
    path:router.faq,
    component:<Faq/>
  },
  {
    path:router.noPath,
    component: <h1>worng URL path</h1>
  },
]

function App() {
  const [quizListData,setQuizListData] = useState(quizList)
  const [isQuizStartBtnClick,setIsQuizStartBtnClick] = useState(false)

  return (
    <div className="App">
      {
        isQuizStartBtnClick == false ? <Navbar/> : null
      }
      <StartBtnContext.Provider value={setIsQuizStartBtnClick}>
      <div className='content'>
      <Routes>
        {
          quizListData.map((item, index) => (<Route key={index} path={item.path} element={item.component} />))

        }
      </Routes>
      </div>
      </StartBtnContext.Provider>
      {
        isQuizStartBtnClick == false ? <Footer/> : null
      }
    </div>
  );
}

export default App;
