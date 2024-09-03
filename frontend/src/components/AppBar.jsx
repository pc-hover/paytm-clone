import { Button } from "./Button"
export function AppBar({ user }) {

    return <div className="flex flex-row justify-between rounded-smborder-solid">

        <div className="flex flex-row p-4">
            <div className="p-4  flex flex-col justify-center border-4">Paytm App</div>
        </div>        <div className="flex flex-row p-4">

            <div className="p-4 flex flex-col justify-center">{"Priyanshu Choudhary"}</div>
            <Button label={"PC"}></Button>


        </div>

    </div >

}