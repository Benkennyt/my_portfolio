import React, { useEffect, useState } from 'react';
import './Slide.css';

const SlideInText = ({ text, inView }: { text: string; inView: boolean }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(inView);
    }, [inView]);

    return (
        <div className={active ? 'slide-in-exp' : 'hide'}>
            <h1>{text}</h1>
        </div>
    );
};

export default SlideInText;
