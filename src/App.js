
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



function App() {

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

    // {
    //   path:router.quizType("javascript"),
    //   component: <Quiz />
    // },
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
      path:router.noPath,
      component: <h1>worng URL path</h1>
    },
  ]

  


  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Routes>
        {
          quizList.map((item, index) => (<Route key={index} path={item.path} element={item.component} />))

        }
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
