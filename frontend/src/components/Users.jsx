import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"


import { CardComponent } from "./CardComponent";


export function Users() {


    const [users, setUsers] = useState([]);
    const [pattern, setPattern] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + pattern)
            .then(response => {
                setUsers(response.data.user)
            }
            )

    }, [pattern]);


    return <div>
        <div className="text-lg">
            Users
        </div>

        <div className="SearchBox my-3 border">
            <input type="text" label={"Users"} placeholder={"Search here"} onChange={(e) => {
                setPattern(e.target.value);
            }} className="w-full " />
        </div>
        <div>
            {console.log(users)}
            {users.map(i =>

                <CardComponent user={i} />
            )}
        </div>
    </div>

}