// import "./style.css"

import { useState, useEffect } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCancel } from "react-icons/md";


const ScoreDetail = ({ data }) => {

    const [marks, setMarks] = useState(0)

    let mark = 0
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            let curr = data[i]
            if (curr.selected === curr.correct) {
                mark = mark + 1
            }
        }
        setMarks(mark)
    }, [])

    const checkCorrect = (item, optIndex) => {
        if (item.selected == item.correct && item.selected == optIndex) {
            return <IoIosCheckbox />
        } else if (item.selected != item.correct && item.selected == optIndex) {
            return <MdCancel />
        } else if (item.selected != optIndex && optIndex == item.correct) {
            return <IoIosCheckbox />
        }
        else {
            return null
        }
    }

   
    return (
        <>
            <h1> Your score {mark} / {data.length} </h1>
            {
                data.map((item, index) => (
                    <div className="question" key={index}>
                        <h3><span>{index + 1}.</span> {item.question}</h3>
                        {item?.options?.map((option, optIndex) => {
                            return (
                                <div key={optIndex} className="options">
                                    <br />

                                    <input
                                        type="radio"
                                        name="option"
                                        value={optIndex}
                                        checked={Number(item.selected) === Number(optIndex)}
                                    onChange={()=>{}}
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