import useNewSubForm from "../hooks/useNewSubForm"
import { Sub } from "../types"

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    

const [inputValues,dispatch] = useNewSubForm()

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub( inputValues)
    dispatch({type: "clear"})
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => { 
    const {name,value} = e.target
    dispatch({
        type: "change_value",
        payload:{
            inputName: name,
            inputValue: value
        }
    })
}

const handleClear = () => { 
    dispatch({type: "clear"})
}

console.log(inputValues)

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type='text'name='nick' placeholder="nick" ></input>
            <input onChange={handleChange} value={inputValues.subMonths} type='number'name='subMonths' placeholder="SubMonths" ></input>
            <input onChange={handleChange} value={inputValues.avatar} type='text'name='avatar' placeholder="avatar" ></input>
            <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder="description" ></textarea>
            <button onClick={handleClear} type="button">Clear de form</button>
            <button type="submit">Save new Subs!</button>
        </form>
    </div>

)


}



export default Form;