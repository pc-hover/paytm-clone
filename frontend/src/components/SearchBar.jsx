import { InputTextBox } from "./InputTextBox";

export function SearchBar({ label, onChange }) {
    return <div >
        <InputTextBox label={label} placeholder={"Search " + label} onChange={{ onChange }} />
    </div>
}