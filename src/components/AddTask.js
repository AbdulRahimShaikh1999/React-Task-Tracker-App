import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setBodyPart] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert ('add something')
            return
        }

        onAdd ({text, bodyPart: day, reminder})

        setText('')
        setText('')
        setText(false)

    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} 
            onChange={(e) => 
            setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>bodypart</label>
            <input type="text" placeholder="Add day and time"
            value={day} 
            onChange={(e) => 
            setBodyPart(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>reminder</label>
            <input type="checkbox"
            checked={reminder}
            value={reminder} 
            onChange={(e) => 
            setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value='save task' className=" btn btn-block"/>
    </form>
  )
}

export default AddTask

