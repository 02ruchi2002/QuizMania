import React, { useEffect, useState } from "react";
import "./style.css";
import Instruction from "../instruction";
import { Questions } from "../../constant/data";
import { useParams } from "react-router-dom";
import Message from "../quiz-over-message";

const Quiz = () => {
  // let pathName = window.location.pathname
  // let urlStringArr = pathName.split("/")

  const params = useParams();
  let quizType = params.type;

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [marks, setMarks] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timerId;

  useEffect(() => {
    setData(Questions[quizType]);
  }, []);

  useEffect(() => {
    if (isQuizStarted == false) {
      return;
    }

    timerId = setTimeout(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
        setIsQuizStarted(false);
        setShowMessage(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds, minutes, isQuizStarted]);

  const onOptionChange = (e) => {
    data[activeIndex].selected = Number(e.target.value);
    setData([...data]);
  };

  const handleSubmit = () => {
    setIsQuizStarted(false);
    setShowMessage(true);
    let marks = 0;

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.selected === item.correct) {
        marks = marks + 1;
      }
    }

    setMarks(marks);
  };

  return (
    <>
      {/* <h1>{quizType} quiz</h1> */}
      {isQuizStarted == false && showMessage == false ? (
        <Instruction startQuiz={setIsQuizStarted} showMesg={setShowMessage} />
      ) : null}
      {isQuizStarted == true && showMessage == false ? (
        // <div className="parent-container">
            <div className="ques-box">
                <div className="countDown">
                <h1>
                    {activeIndex + 1}
                    <span>/10</span>
                </h1>

                <h1>
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </h1>
                </div>
                {data?.map((item, index) => {
                if (index == activeIndex) {
                    return (
                    <div className="question" key={index}>
                        <h3> {item.question}</h3>
                        {item?.options?.map((option, optIndex) => (
                        <div key={optIndex} className="options">
                            <br />

                            <input
                            type="radio"
                            name="option"
                            value={optIndex}
                            checked={item.selected === optIndex}
                            onChange={onOptionChange}
                            />

                            <label>{option}</label>
                        </div>
                        ))}
                    </div>
                    );
                    return null;
                }
                })}
                <br />
                <div className="button-container">
                <div className="btn">
                    {activeIndex > 0 ? (
                    <button onClick={() => setActiveIndex(activeIndex - 1)}>
                        Prev
                    </button>
                    ) : null}
                </div>

                <div className="btn">
                    {activeIndex == 0 || activeIndex < 9 ? (
                    <button onClick={() => setActiveIndex(activeIndex + 1)}>
                        Next
                    </button>
                    ) : null}
                </div>

                <div className="btn">
                    {activeIndex == 9 ? (
                    <button onClick={handleSubmit}>Submit </button>
                    ) : null}
                </div>
                </div>
            </div>
        // </div>
      ) : null}
      {isQuizStarted == false && showMessage == true ? (
        <Message marks={marks} />
      ) : null}
    </>
  );
};

export default Quiz;
