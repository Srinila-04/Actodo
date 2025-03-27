import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,setEusername] = useState("")
    const [epassword,setEpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    function handleUInput(event)
    {
        setEusername(event.target.value)
    }
    function handleInput(event)
    {

        setEpassword(event.target.value)
    }
    function handleConfirmInput(event) {
        setConfirmPassword(event.target.value)
    }
    function addUser()
    {
        if (!eusername || !epassword || !confirmPassword) {  // ➡️ Checks if all fields are filled
            setError("All fields are required");
            return;
        }
        if (epassword !== confirmPassword) {  // ➡️ Checks if passwords match
            setError("Passwords do not match");
            return;
        }
        if (users.some(user => user.username === eusername)) {  // ➡️ Prevents duplicate usernames
            setError("Username already exists");
            return;
        }
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Dude!!</h1>
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="username"
                    onChange={handleUInput}/>

                    <input type="password" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="password"
                    onChange={handleInput}/>

                    <input type="password" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="confirm password"
                    onChange={handleConfirmInput}/>

                    <button className="bg-[#F7C8A0] w-24 p-1 border-black border rounded-md" onClick={addUser}>
                        Sign Up
                    </button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup
