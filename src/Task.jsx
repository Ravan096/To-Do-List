import React from 'react'

const Task = ({title, description,index,deleteTask}) => {
  return (
    <div className='Task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={()=>{deleteTask(index)}}>-</button>
    </div>
  )
}

export default Task;