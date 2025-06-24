import NextImage from "next/image";
import clsx from "clsx";
import Text from "@/components/text";

export default function Image({ src, className, height, width, fade, link, rounded, caption, href, ...props }) {
    return (
        <div className={className}>
            <NextImage
                fill
                className={clsx({
                    "mask-b-from-25%": fade,
                    "rounded-3xl": rounded,
                    "hover:opacity-60 transition duration-300 ease-in-out": link,
                }, className)}
                objectFit="cover"
                src={src}
                {...props}
            />
            {caption ? <Text className="relative top-[350px] ml-5 text-xl font-bold">{caption}</Text> : <></>}
        </div>
    );
}