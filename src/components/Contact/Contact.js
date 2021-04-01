import react, { useState, useRef, useEffect } from 'react';
import engelbergImg0 from '../../Images/engelberg_0.jpg';
import engelbergImg1 from '../../Images/engelberg_1.jpg';
import engelbergImg2 from '../../Images/engelberg_2.jpg';
import engelbergImg3 from '../../Images/engelberg_3.jpg';
import engelbergImg4 from '../../Images/engelberg_4.jpg';
import engelbergImg5 from '../../Images/engelberg_5.jpg';

const Contact = () => {
    const imgStyle = {
        'max-width': '800px',
    };
    const images = [engelbergImg0, engelbergImg1, engelbergImg2, engelbergImg3, engelbergImg4, engelbergImg5];
    const [counter, setCounter] = useState(3);
    const [image, setImage] = useState(engelbergImg2);
    const [delay, setDelay] = useState(null);
    const intervalRef = useRef();

    useEffect(() => {
        setImage(images[counter]);
    }, [counter]);

    const onIncrement = () => {
        let next = counter === images.length - 1 ? 0 : counter + 1;
        setCounter(next);
    };
    const onDecrement = () => {
        let next = counter === 0 ? images.length - 1 : counter - 1;
        setCounter(next);
    }

    useInterval(() => {
        onDecrement()
    }, delay);

    const onStart = () => {
        setDelay(1000);
    }

    const onStop = () => {
        setDelay(null);
    }

    return (
        <div >
            <h2>Contact Page</h2>
            <main>
                <div>
                    <p>This section contains information about...</p>
                    <img style={imgStyle} src={image} alt='engelberg' />
                </div>
                <div>
                    <label>{counter}</label>
                    <button onClick={onDecrement}>prev</button>
                    <button onClick={onIncrement}>next</button>
                    <button onClick={onStart}>start</button>
                    <button onClick={onStop}>stop</button>
                </div>
            </main>
        </div>
    )
}

/**
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Contact;