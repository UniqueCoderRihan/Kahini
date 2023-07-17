import  { useState, useEffect } from 'react';

const CountTimer = () => {
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(3);

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateCountdown = () => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        } else {
            if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            }
        }
    };

    return (
        <span className="countdown font-mono text-2xl">
            <span style={{ '--value': hours.toString().padStart(2, '0') }}></span>:
            <span style={{ '--value': minutes.toString().padStart(2, '0') }}></span>:
            <span style={{ '--value': seconds.toString().padStart(2, '0') }}></span>
        </span>
    );
};

export default CountTimer;
