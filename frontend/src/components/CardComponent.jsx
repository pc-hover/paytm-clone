import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export function CardComponent({ user }) {

    const navigate = useNavigate();
    console.log(user)

    return <div className="my-4 flex flex-row justify-between">

        <div className="flex flex-row justify-center">

            <div className="flex-flex-col justify-center p-3">
                {user.firstname[0]}
            </div>

            <div className="flex flex-col justify-center p-3 ">
                {user.firstname} {user.lastname}
            </div>

        </div>

        <div className="flex flex-col justify-center">

            <Button label={"Transfer"} onClick={() => {
                navigate("/transfer?id=" + user._id + "&name=" + user.firstname + " " + user.lastname);
            }} />

        </div>
    </div>

}

// user.firstName.slice(1, 1);
// user.lastName.slice(1, 1);