import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState("")
    const [epassword,setEpassword] = useState("")
    const [ruser,setRuser] = useState(true)

    const users = props.users

    function handleUInput(event)
    {
        setEusername(event.target.value)
    }

    function handleInput(event)
    {

        setEpassword(event.target.value)
    }

    function checkUser()
    {
        var userfound = false 
        
        console.log(users)
        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})

            }
        })

        if(userfound===false)
        {
            console.log("login Failed")
            setRuser(false)
        }
    }
        

    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Dude!!</h1>
            <p>I help you to manage your activities after login :)</p>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="username"
                onChange={handleUInput}
                value={eusername}/>

                <input type="password" 
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="password"
                onChange={handleInput}
                value={epassword}/>

                <button className="bg-[#A7D49B] w-24 p-1 border-black border rounded-md" onClick={checkUser}>
                    Login
                </button>
                {!ruser && (
    <p className="text-red-500 text-sm">
        Please Sign Up Before You Login
    </p>
)}


                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
        </div>
    </div>
    )
}
export default Login
