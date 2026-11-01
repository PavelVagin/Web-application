import { useState } from "react";
import { freshSession, saveSession } from "../model";
import { useNavigate } from "react-router-dom";
import { Intro } from "../components/Intro";
import { Input } from "../components/Input";

function MainPage() {
    return (
        <main className="workspace start-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>

            <h1 className="brand-title" style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '40px' }}>
                SneakSwipe
            </h1>

            <div className="input-container">
            </div>

            <p className="footer-text">
                Создай свой idealный вишлист в один клик
            </p>
        </main>
    );
}

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
                <Input value={name} onChange={setName} onClick={handleSaveName} />
            </main>
        </Intro>
    );
}

export { HomePage };
export { MainPage };
