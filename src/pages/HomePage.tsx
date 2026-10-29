import { Check } from "lucide-react";
import { GradientBackground } from "../components/Gradientbackground";
import { useState } from "react";

function HomePage() {
    const [name, setName] = useState("");

    const handleSaveName = () => {
        localStorage.setItem("name", name);
    };

    return (
        <>
            <GradientBackground />
            <main className="main">
                <h1 className="main_title"> SneakSwipe </h1>
                <div className="main_name">
                    <input className="main_input" type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="main_button" onClick={handleSaveName}>
                        <Check />
                    </button>
                </div>
                <p className="main_description">Создай свой идеальный вишлист в один клик</p>
            </main>
        </>
    );
}

export { HomePage };