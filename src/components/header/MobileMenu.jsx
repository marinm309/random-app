import { useState } from "react";

function MobileMenu() {
    const MENU = {
        root: [
            { label: "Computer", next: "computer" },
            { label: "Phones", next: "phones" },
            { label: "Accessories", href: "/accessories" },
        ],
        computer: [
            { label: "Monitors", href: "/computer/monitors" },
            { label: "Mice", href: "/computer/mice" },
            { label: "Keyboards", href: "/computer/keyboards" },
        ],
        phones: [
            { label: "Android", href: "/phones/android" },
            { label: "iPhone", href: "/phones/iphone" },
        ],
    };

    const [stack, setStack] = useState(["root"]);

    const current = MENU[stack[stack.length - 1]];

    const goForward = (key) => setStack([...stack, key]);
    const goBack = () =>
    setStack((s) => s.length > 1 ? s.slice(0, -1) : s);

    return (
        <div className="menu-container">
            {stack.length > 1 && (
            <button className="menu-back" onClick={goBack}>
                ← Back
            </button>
            )}

            <div
            className="menu-panels"
            style={{ transform: `translateX(-${(stack.length - 1) * 100}%)` }}
            >
            {stack.map((key, i) => (
                <div className="menu-panel" key={i}>
                {MENU[key].map((item) =>
                    item.next ? (
                    <button
                        key={item.label}
                        onClick={() => goForward(item.next)}
                    >
                        {item.label} →
                    </button>
                    ) : (
                    <a key={item.label} href={item.href}>
                        {item.label}
                    </a>
                    )
                )}
                </div>
            ))}
            </div>
        </div>
    );
}

export default MobileMenu