
import "./style.css"
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/atoms/search-bar";
import { useState } from "react";

const quizList = [
    {
        name: "HTML",
        icon: <IoLogoHtml5 />,
        path: "/quiz/html"
    },
    {
        name: "CSS",
        icon: <IoLogoCss3 />,
        path:"/quiz/css"
    },
    {
        name: "JAVASCRIPT",
        icon: <TbBrandJavascript />,
        path:"/quiz/javascript"
    },
    {
        name: "REACT",
        icon: <GrReactjs />,
        path:"/quiz/react"
    },
    {
        name: "JAVA",
        icon: <FaJava/>,
        path:"/quiz/java"
    },
    {
        name: "ANGULAR",
        icon: <FaAngular />,
        path: "/quiz/angular"
    },
    {
        name: "JQUERY",
        icon: <SiJquery />,
        path:"/quiz/jquery"
    },
    {
        name: "GIT",
        icon: <FaGithub />,
        path:"/quiz/git"
    },
    {
        name: "SHELL-SCRIPTING",
        icon: <GrReactjs />,
        path:"/quiz/shellscripting"
    },
    {
        name: "PYTHON",
        icon: <SiPython />,
        path:"/quiz/python"
    },
    {
        name: "NEXT.JS",
        icon: <RiNextjsLine />,
        path: "/quiz/netxjs"
    },
    {
        name: "VUE.JS",
        icon: <FaVuejs />,
        path:"/quiz/vuejs"
    },
    {
        name: "DJANGO",
        icon: <SiDjango />,
        path:"/quiz/django"
    },
    {
        name: "GOLANG",
        icon: <BiLogoGoLang />,
        path:"/quiz/golang"
    },
    {
        name: "SPRING-BOOT",
        icon: <BiLogoSpringBoot />,
        path:"/quiz/springboot"
    },
    {
        name: "TAILWIND CSS",
        icon: <SiTailwindcss />,
        path: "/quiz/tailwindcss"
    },
    {
        name: "RUBY",
        icon: <DiRuby />,
        path:"/quiz/ruby"
    }, 
]

const QuizList = () => {

    const [quizData,setQuizData] = useState(quizList)

    const navigate = useNavigate()

    const handleClick = (item) => {
        navigate(item.path)
    }


    return (
        <div className="container">
            <div className="search-bar">
            <SearchBar setQuizData={setQuizData} quizData={quizData} />
            </div>
            <div className="quiz-list">
            {
                quizData.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)} className="card">
                        <div className="icon" >{item.icon}</div>
                        <div className="name">{item.name}</div>
                    </div>))
            }
            </div>


        </div>
       
    )
}

export default QuizList

