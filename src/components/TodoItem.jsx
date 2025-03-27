function TodoItem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    function handleDelete(deleteid)
    {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false 
            } else{
                return true
            }
            })
            setactivityArr(temparr)

    }
    return(
        <div className="flex justify-between">
            <p>{props.index+1}.{props.item.activity}</p>
            <button className="text-black" onClick={()=>handleDelete(props.id)}>❌</button>
        </div>
    )
}
export default TodoItem