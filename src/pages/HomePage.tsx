import { Check } from "lucide-react";
import { useState } from "react";
import { freshSession, saveSession } from "../model";
import { useNavigate } from "react-router-dom";
import { Intro } from "../components/Intro";

function HomePage() {
    const [name, setName] = useState("");
    const nav = useNavigate();

    const handleSaveName = () => {
        localStorage.setItem("name", name);
        saveSession(freshSession(name));
        nav("/game")
    };

    return (
        <Intro>
            <main className="main">
                <h1 className="main_title"> SneakSwipe </h1>
                <div className="main_name">
                    <input className="main_input" type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="main_button" onClick={handleSaveName}>
                        <Check />
                    </button>
                </div>
            </main>
        </Intro>
    );
}

export { HomePage };