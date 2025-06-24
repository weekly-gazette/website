export default function Error({ children, }) {
    return (
        <div className="text-sm border border-red-200 text-red-200 px-1.5 py-1 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{children}</span>
        </div>
    )
}