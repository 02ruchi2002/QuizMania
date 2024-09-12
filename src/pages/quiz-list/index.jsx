
import "./style.css"
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { useNavigate } from "react-router-dom";



const QuizList = () => {

    const navigate = useNavigate()

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
        }
    ]

    const handleClick = (item) => {
        navigate(item.path)
    }


    return (
        <div className="container">
            {
                quizList.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item)} className="card">
                        <div className="icon" >{item.icon}</div>
                        <div className="name">{item.name}</div>
                    </div>))
            }


        </div>
       
    )
}

export default QuizList

