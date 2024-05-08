import React, {useState} from "react"



export default function Project01() {
    
    const [tasks, setTasks] = useState(["eat breakfast", "task a shower", "walk dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {

        setNewTask(event.target.value)
        
    }

    function addTask() {

        if(newTask.trim() !== ""){
            setTasks(t => [...tasks, newTask])
            setNewTask("")
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {

        const updatedTasks = [...tasks]

        if(index > 0){
            

            //swap two index in an array
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
        
    }

    function moveTaskDown(index) {

        const updatedTasks = [...tasks]

        if(index < tasks.length -1 ){
            

            //swap two index in an array
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
        
    }
    
    
    
    return (
        <div className="to-do-list">
            <h1>To - Do - List</h1>

            <div>
                <input
                    className="to-do-input"
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button className="to-do-add-button" onClick={addTask}>

                    add

                    
                </button>
            </div>

            <ol className="to-do-ol-list">
                {tasks.map((task, index) => 
                    <li className="to-do-li-list" key={index}>
                        <span className="text">{task}</span>
                        <button className="to-do-delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="to-do-up-button" onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className="to-do-down-button" onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                
                
                )}

            </ol>

        </div>
    ) 
}