import { useState, useEffect } from "react";
import correctIcon from '../../assests/icons/correct.png'
import incorrectIcon from '../../assests/icons/incorrect.svg'
import './style.css'

const ScoreDetail = ({ data }) => {

    const [marks, setMarks] = useState(0)

    useEffect(() => {
        if (!data?.length) return
        const totalMarks = data.reduce((acc, item) => {
            if (item?.selected === item?.correct) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0)
        setMarks(totalMarks)
    }, [data])

    const checkCorrect = (item, optIndex) => {
        if (item.selected === "") return null;
        if ((item.selected === optIndex && item.selected === item.correct) || item.correct === optIndex) return <div className="result-icon"><img src={correctIcon} alt="" /></div>
        else if (item.selected === optIndex && item.selected !== item.correct) {
            return <div className="result-icon"><img src={incorrectIcon} alt="" /></div>
        } else return null;
    }

    const getClassName = (item) => {
       if(item.selected === "") return 'unattempted'
       return item?.selected === item.correct ? 'correct': 'incorrect'
    }

    const counts = data?.reduce((acc, item) => {
        if(item.selected === ""){
            return {
                ...acc,
               unattempted: acc?.unattempted + 1
            }
        }
        if(item?.selected === item.correct){
            return {
                ...acc,
               correct: acc?.correct + 1
            }
        }
       
        return {
            ...acc,
           incorrect: acc?.incorrect + 1
        }
    }, {unattempted:0, correct: 0, incorrect:0});

    return (
        <>
           <div className="result-header">
           <h1> Your score:  {marks} / {data?.length} </h1>
            <div className="color-identifier">
                <div className="correct-box"></div><span>{counts?.correct} Correct</span>
                <div className="incorrect-box"></div><span>{counts?.incorrect} Incorrect</span>
                <div className="unattempted-box"></div><span>{counts?.unattempted} Un-Attempted</span>
            </div>
           </div>
            {
                data.map((item, index) => (
                    <div className={`question qbox ${getClassName(item)}`} key={index}>
                        <h3><span>{index + 1}.</span> {item.question}</h3>
                        {item?.options?.map((option, optIndex) => {
                            return (
                                <div key={optIndex} className="options">
                                    <br />
                                    <input
                                        className="radio-option-result"
                                        type="radio"
                                        name={option}
                                        value={option}
                                        disabled={true}
                                        checked={item.selected === optIndex}
                                    />

                                    <label>{option}</label>
                                    {
                                        checkCorrect(item, optIndex)
                                    }
                                </div>

                            )
                        })}
                    </div>
                ))
            }
        </>
    )
}

export default ScoreDetail