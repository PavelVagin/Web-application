import { useState } from "react";
import { freshSession, saveSession } from "../model";
import { useNavigate } from "react-router-dom";
import { Intro } from "../components/Intro";
import { Input } from "../components/Input";

function HomePage() {
    const [name, setName] = useState("");
    const nav = useNavigate();

    const handleSaveName = () => {
        localStorage.setItem("name", name);
        saveSession(freshSession(name));
        nav("/game");
    };

    return (
        <Intro>
            <main className="main" style={{ position: 'relative', minHeight: '100vh' }}>
                <div className="logo-wrapper" style={{
                    position: 'absolute',
                    top: '11%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    backgroundColor: '#000000',
                    mixBlendMode: 'color-dodge',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <img
                        src="/logo.png"
                        alt="SneakSwipe Logo"
                        style={{
                            width: '260px',
                            height: 'auto',
                            display: 'block',
                            filter: 'invert(1) brightness(2) contrast(2)',
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    <div style={{
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: '#e5e7eb',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        userSelect: 'none'
                    }}>
                        <span>s</span>
                        <span>n</span>
                        <span>e</span>
                        <span>a</span>
                        <span>k</span>
                        <span>e</span>
                        <span>r</span>
                        <span>s</span>
                    </div>
                </div>
                <h1 className="main_title"> SneakSwipe </h1>
                <Input value={name} onChange={setName} onClick={handleSaveName} />
            </main>
        </Intro>
    );
}

function MainPage() {
    return null;
}

export { HomePage };
export { MainPage };
