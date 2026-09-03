import {type ReactElement, useEffect, useRef, useState} from "react";

export default function Timer(): ReactElement {
    const [start, setStart] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const timer = useRef<number | null>(null);

    function handleStart(): void {
        const currentTime = Date.now();
        setStart(currentTime);
        setNow(currentTime);

        // Hentikan timer sebelumnya jika ada (mencegah double timer)
        if (timer.current !== null) {
            clearInterval(timer.current);
        }

        // Simpan ID interval ke ref
        timer.current = window.setInterval((): void => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop(): void {
        if (timer.current !== null) {
            clearInterval(timer.current);
            timer.current = null;
        }
    }

    // Pembersihan (Cleanup) saat komponen unmount agar tidak memory leak
    useEffect(() => {
        return () => {
            if (timer.current !== null) {
                clearInterval(timer.current);
            }
        };
    }, []);

    // Hitung selisih waktu secara aman dari null-check
    const elapsedTime = (now !== null && start !== null) ? now - start : 0;

    return (
        <>
            <h1>Timer : {elapsedTime} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}