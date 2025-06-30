import clsx from "clsx";
import Spinner from "@/components/spinner";

export default function Button({ children, loading, className, shadow, disabled, dark, ...props }) {
    return (
        <button
            className={clsx(
                className,
                {
                    "text-gray-200": disabled,
                    "shadow-lg shadow-gray-800/50": shadow,
                    "bg-black border border-gray-600 hover:bg-gray-800 text-gray-200": dark,
                    "bg-white hover:bg-gray-300 text-black": !dark,
                },
                "text-sm rounded-md py-2 px-3 cursor-pointer"
            )}
            {...props}
        >
            <div className="flex">
                {children}
                {loading && <Spinner />}
            </div>
        </button>
    );
}