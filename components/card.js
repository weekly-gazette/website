import Text from "@/components/text";

function Card({ children, ...props }) {
    return (
        <div className="flex flex-col bg-black rounded-md p-5 lg:w-[25vw] max-w-[75vw] w-[75vw] outline-[0.5px] outline-gray-700" {...props}>
            {children}
        </div>
    );
}

function Header({ children, ...props }) {
    return (
        <div className="py-1">
            <Text h1 {...props}>{children}</Text>
        </div>
    )
}

function Body({ children, ...props }) {
    return (
        <div className="py-3 text-gray-400" {...props}>{children}</div>
    )
}

function Footer({ children, ...props }) {
    return (
        <div className="pt-5 flex" {...props}>{children}</div>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;