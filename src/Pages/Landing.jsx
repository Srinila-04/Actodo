import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing() {
    const data = useLocation();
    console.log(data.state.user)

    return (
        <div>
            <div className="bg-black p-16">
                <div className="bg-white p-10 border rounded-md">
                    <Header username={data.state.user}/>
                    <div className="flex justify-between gap-7 my-5 flex-wrap">
                        <Card bgcolor={"#4A7BA7"} title={"23°"} subtitle={"Dharmapuri"} />
                        <Card bgcolor={"#E8A317"} title={"March 23"} subtitle={"14:40:55"} />
                        <Card bgcolor={"#F5E3C4"} title={"Built Using"} subtitle={"React"} />
                    </div>
                    <TodoContainer />
                </div>
            </div>
        </div>
    );
}

export default Landing;
