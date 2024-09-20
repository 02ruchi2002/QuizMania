import React, { useState } from "react";
import './style.css'
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";


const SearchBar = ({setQuizData,quizData}) =>{
    const [searchValue,setSearchValue] = useState("")
   
     const handleSearch = (e) => {
         setSearchValue(e.target.value.toUpperCase())
     } 

     const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            handleClick()
        }
     }
     
     const handleClick = () => {
        const filterQuiz = quizData.filter((item)=>(item.name.includes(searchValue))) 
        setQuizData(filterQuiz)
     }

    const handleCancel = () => {
        setQuizData(quizData)
        setSearchValue("")
    } 
      
    return(
        <div id="search-bar">
        <input type="text" placeholder="search..." onChange={handleSearch} onKeyDown={handleKeyDown} value={searchValue}/>
        {
            searchValue ?  <GiCancel  className="cancel-icon" onClick={handleCancel} /> : null
        }
        <FaSearch className="search-icon" onClick={handleClick} />
        </div>
    )
}

export default SearchBar