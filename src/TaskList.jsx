import './css/index.css';



function TaskList({tasks}) {
    if (tasks.length === 0) {
        return <h1>no hay publicaciones todavia</h1>
    }
    return (
        <div>
            {tasks.map((task) => (
            <div className={task.topic} id="publi" key={task.id}>
                <h1>{task.title}</h1><br/>
                <p>{task.description}</p><br/>
                <h1>{task.topic}</h1>
            </div>
                    
            ))}
        </div>
    );
}
export default TaskList