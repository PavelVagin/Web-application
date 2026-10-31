import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Intro } from "../components/Intro";
import { decodeInvitation, freshSession, getName, saveSession, setName as saveName } from "../model";
import { Input } from "../components/Input";

function JoinPage() {
    const nav = useNavigate();
    const loc = useLocation();
    const encoded = new URLSearchParams(loc.hash.slice(1)).get("s");
    const invitation = encoded ? decodeInvitation(encoded) : null;
    const [name, setName] = useState(getName());

    if (!invitation) {
        return (
            <Intro>
                <div className="center-block">
                    <h2>Приглашение не найдено, попробуй снова</h2>
                </div>
            </Intro>
        );
    }

    function handleSaveName() {
        if (!name.trim() || !invitation) return;
        const first = { name: invitation.name, likes: invitation.likes };
        saveName(name.trim());
        saveSession(freshSession(name.trim(), first));
        nav("/game");
    }

    return (
        <Intro>
            <div className="join-form">
                <h2>{invitation.name} приглашает тебя собрать свой идеальный вишлист!</h2>
                <p>Оцените 20 культовых моделей и найдите общий мэтч</p>
                <Input value={name} onChange={setName} onClick={handleSaveName} />
            </div>
        </Intro>
    );
}

export { JoinPage };