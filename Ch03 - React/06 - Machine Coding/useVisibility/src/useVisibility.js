import { useState } from "react";

function useVisibility(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility);

    const toggle = () => {
        setIsVisible(prev => !prev);
    };

    const show = () => {
        setIsVisible(true);
    }

    const hide = () => {
        setIsVisible(false);
    }

    return {isVisible, toggle, show, hide}
}

export default useVisibility