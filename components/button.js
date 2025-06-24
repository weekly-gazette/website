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
                },
                "text-sm rounded-md text-black bg-white py-2 px-3 hover:bg-gray-300 cursor-pointer"
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