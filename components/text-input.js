import clsx from "clsx";

export default function TextInput({ name, className, ...props }) {
    return (
        <input
            id={name}
            name={name}
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            type="text"
            className={clsx(
                "bg-gray-700 rounded-md px-1.5 py-1"
            )}
            {...props}
        />
    );
}