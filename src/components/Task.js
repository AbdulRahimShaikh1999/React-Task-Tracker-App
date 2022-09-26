import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.bodyPart}
        <FaTimes style={{color: 'blue', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
        </h3>
        <h3>{task.text}</h3>
    </div>
  )
}

export default Task

//watch 