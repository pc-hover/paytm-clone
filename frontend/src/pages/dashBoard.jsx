import axios from "axios"
import React, { useEffect, useState } from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    
    const getBalance = async () => {

        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                "Authorization": "BEARER " + localStorage.getItem("token"),
            }
        });
        try {
            console.log("hello priyanhsu" + response.data.balance);
            setBalance(response.data.balance);
        }
        catch (e) {
            console.error("Failed to get Balance: ", e)
        }
    }

    useEffect(() => {
        getBalance();
    }, [])

    return <div className="bg-white flex flex-col">
        <AppBar />
        <div>
            <Balance balance={balance} />
            <Users />
        </div>

    </div>
}


