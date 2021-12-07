import InputWithIcon from "./InputWithIcon"
import './form.scss'
import {  useState } from "react"

import { useSelector } from "react-redux"

export const Form = ({...props}) => {

    const state = useSelector((i) => i.postListReducer.articles)



const [text, setText] = useState(props.value)

    const handleInput = (event) => {
        setText(event.target.value)
        props.handleValue(text)
    }

    return (
        <div className='form'>
            <div >
            <span className='filter_by_keywords'>Filter by keywords</span>
             <InputWithIcon value={text} onChange={handleInput}/>
            
             </div>
            <span className="result">Result: {  state.filter(
          (i) => i.title.toLowerCase().includes(props.value) || i.content.toLowerCase().includes(props.value)
        ).length}</span>
        </div>
    )
}

