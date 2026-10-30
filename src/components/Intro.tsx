import type { ReactNode } from "react";
import { GradientBackground } from "./Gradientbackground";

function Intro({ children }: { children: ReactNode }) {
    return (
        <main className="intro">
            <GradientBackground />
            <div className="intro__content">
                {children}
            </div>
            <footer>Создай свой идеальный вишлист в один клик</footer>
        </main>
    );
}

export { Intro };