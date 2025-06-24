"use client";
import clsx from "clsx";
import React from "react";

export default function Badge({ children, className, interactive, onClick, ...props }) {
    const [touched, setTouched] = React.useState(false);

    return (
        <span
            className={clsx(
                className,
                {
                    "hover:bg-gray-600 cursor-pointer": interactive,
                    "bg-gray-600": interactive && touched,
                    "bg-gray-800": !(interactive && touched),
                },
                "rounded-md whitespace-nowrap",
                "px-1.5 py-1 text-sm text-white"
            )}
            onClick={() => setTouched((prevState) => interactive && !prevState)}
            {...props}
        >
            {children}
        </span>
    )
}