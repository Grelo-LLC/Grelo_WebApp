import { useEffect } from "react";

export default function LayoutHandler({ activeLayout, setActiveLayout }) {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200 && window.innerWidth > 767) {
                setActiveLayout((pre) => (pre > 3 ? 3 : pre));
            } else if (window.innerWidth < 768) {
                setActiveLayout((pre) => (pre > 2 ? 2 : pre));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <li
                className={`tf-view-layout-switch sw-layout-4 ${activeLayout == 4 ? "active" : ""
                    }`}
                onClick={() => setActiveLayout(4)}
                data-value-layout="tf-col-4"
            >
                <div className="item">
                    <svg
                        className="icon"
                        width={30}
                        height={20}
                        viewBox="0 0 30 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={3} cy={6} r="2.5" stroke="#181818" />
                        <circle cx={11} cy={6} r="2.5" stroke="#181818" />
                        <circle cx={19} cy={6} r="2.5" stroke="#181818" />
                        <circle cx={27} cy={6} r="2.5" stroke="#181818" />
                        <circle cx={3} cy={14} r="2.5" stroke="#181818" />
                        <circle cx={11} cy={14} r="2.5" stroke="#181818" />
                        <circle cx={19} cy={14} r="2.5" stroke="#181818" />
                        <circle cx={27} cy={14} r="2.5" stroke="#181818" />
                    </svg>
                </div>
            </li>
        </>
    );
}