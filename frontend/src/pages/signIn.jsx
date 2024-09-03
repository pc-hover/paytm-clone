import React, { useState } from "react"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputTextBox } from "../components/InputTextBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export const Signin = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div className="bg-black h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your details below"} />

                <InputTextBox placeholder={"priyanshu@gmail.com"} label={"Email"} onChange={setUsername} />

                <InputTextBox placeholder={"435247"} label={"Password"} onChange={setPassword} />
                <div className="pt-4">

                    <Button label={"Sign In "} onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            email: username,
                            password: password
                        })
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                    }} />
                </div>
                <BottomWarning
                    label={"Don't have an account"}
                    linkText={"signup"}
                    to={"/signup"}
                />

            </div>
        </div>

    </div>
}