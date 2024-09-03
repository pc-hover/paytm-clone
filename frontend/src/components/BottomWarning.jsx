import { Link } from "react-router-dom"
export function BottomWarning({ label, to, linkText }) {
    return <div className="font-slate-500 flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer pl-1 underline cursor-pointer" to={to}>
            {linkText}
        </Link>
    </div>
}