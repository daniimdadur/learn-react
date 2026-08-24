import type {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div>
            <h1>Container</h1>
            {children}
            <footer>
                <p>This is a container component.</p>
            </footer>
        </div>
    );
}