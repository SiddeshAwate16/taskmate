import React from 'react'

export const ShowTask = ({taskList,setTaskList, task, setTask}) => {

    const handleDelete = (id)=> {
        const updatedTaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedTaskList);
    }

    const handleEdit = (id) => {
        const selectedTaskList = taskList.find(todo => todo.id === id);
        setTask(selectedTaskList);
    }
    
  return (
    <section className="showTask">
        <div className="head">
            <div>
            <span className='title'>Todo</span>
            <span className='count'>{taskList.length}</span>
        </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
            {taskList.map((todo) =>(
                 <li key={todo.id}>
                 <p>
                     <span>{todo.name} </span>
                     <span>{todo.time}</span>
                 </p>
                 <i class="bi bi-pencil-fill" onClick={() => handleEdit(todo.id)}></i>
                 <i class="bi bi-trash-fill" onClick={() => handleDelete(todo.id)}></i>
             </li>

            ))}
           
        </ul>
        
    </section>
  )
}
