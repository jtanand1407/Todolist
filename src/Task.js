export const Task=(props)=>{
    return (
        <div className='listval' style={{backgroundColor: props.status ? "green" : "white"}}>
        <h4>{props.taskname}</h4>
        <button onClick={()=> props.completed(props.id)}>Completed</button>
        <button onClick={()=> props.deltext(props.id)}>x</button>
        </div>
    )
}