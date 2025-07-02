import clsx from "clsx";

export default function Text({ children, h1, h2, h3, paragraph, xs, ...props }) {
    return (
        <div
            className={clsx(
                {
                    "text-xl font-bold": h1,
                    "text-lg": h2,
                    "text-md": h3,
                    "text-sm": paragraph,
                    "text-xs": xs,
                },
            )}
            {...props}
        >
            {children}
        </div>
    );
}