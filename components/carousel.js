import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Carousel({ children, items, ...props }) {
    const breakpoints = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: items || 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: items || 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: items || 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: items || 1
        }
    };

    return (
        <ReactMultiCarousel responsive={breakpoints} {...props}>
            {children}
        </ReactMultiCarousel>
    )
}