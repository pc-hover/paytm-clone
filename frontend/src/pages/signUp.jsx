import React from "react"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputTextBox } from "../components/InputTextBox"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return <div className="bg-black h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your details below"} />

                <InputTextBox placeholder={"Priyanshu"} label={"First Name"} onChange={setFirstName} />

                <InputTextBox placeholder={"Choudhary"} label={"Last Name"}
                    onChange={setLastName} />

                <InputTextBox placeholder={"priyanshu@gmail.com"} label={"Email"} onChange={setUsername} />

                <InputTextBox placeholder={"435247"} label={"Password"} onChange={setPassword} />

                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            firstName,
                            lastName,
                            username,
                            password
                        })
                        console.log(response.data);
                        localStorage.setItem("token", response.data.token)
                        localStorage.setItem("firstName", firstName)
                        localStorage.setItem("lastName", lastName)
                        navigate("/dashboard")
                    }} label={"Sign up"} />
                </div>
                <BottomWarning
                    label={"Already have an account"}
                    linkText={"signin"}
                    to={"/signin"}
                />

            </div>
        </div>

    </div>
}