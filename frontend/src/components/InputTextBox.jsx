export function InputTextBox({ label, placeholder, onChange }) {
    return <div className="text-black">
        <div className="text-sm font-medium text-left">
            {label}
        </div>
        <input type="text" onChange={(e) => {
            onChange(e.target.value)
        }} placeholder={placeholder} className=" w-full px-2 py-1 border rounded border-slate-200 text-slate-300 text-gray-800" />
    </div>
}