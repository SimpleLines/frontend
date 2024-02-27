import { useState, FC } from 'react';

export const Counter: FC = () => {
    const [val, setVal] = useState(0);
    const handler = () => {
        setVal((val) => val + 1);
    };

    return (
        <>
            <p>{val}</p>
            <button
                type="button"
                onClick={handler}>
                Increment counter
            </button>
        </>
    );
};
