import clsx from "clsx";

export default function TextArea({ as, type, name, rows, lassName, ...props }) {
    const DEFAULT_TAG = "textarea";
    const tag = as || DEFAULT_TAG;

    return (
        <tag
            id={name}
            type="textarea"
            name={name}
            rows={rows}
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            className={clsx(
                "w-full bg-gray-700 rounded-md px-1.5 py-1"
            )}
            {...props}
        />
    );
}