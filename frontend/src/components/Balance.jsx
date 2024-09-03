export function Balance({ balance }) {
    return <div className="p-4 text-black flex flex-row justify-start">
        <div className="text-black">
            Your Balance :
        </div>
        <div className="ml-4">
            Rs {balance}
        </div>
    </div>
}