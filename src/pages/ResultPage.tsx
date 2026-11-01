import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartCrack, RotateCcw } from "lucide-react";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Poster } from "../components/Poster";
import { clearSession, matches, movies, readSession } from "../model";
import { calcStatisticsByKey } from "../model";

function ResultPage() {
    const nav = useNavigate();
    const s = readSession();
    const [tab, setTab] = useState<"matches" | "personal">("matches");
    const [person, setPerson] = useState<1 | 2>(2);

    if (!s || s.role !== 2 || !s.first || s.votes.length !== s.order.length)
        return (
            <Intro>
                <div className="center-block">
                    <h2>Пока нет результатов</h2>
                    <button className="primary" onClick={() => nav("/")}>
                        На главную
                    </button>
                </div>
            </Intro>
        );

    const mine = s.votes.filter((v) => v.liked).map((v) => v.id);
    const shown = tab === "matches" ? matches(s.first.likes, mine) : person === 1 ? s.first.likes : mine;
    const result = calcStatisticsByKey(s.first.likes, mine, "brand")


    return (
        <main className="workspace">
            <Header />
            <section className="result-area">
                <nav className="result-tabs">
                    <button className={tab === "matches" ? "active" : ""} onClick={() => setTab("matches")}>
                        Совпадения
                    </button>
                    <button className={tab === "personal" ? "active" : ""} onClick={() => setTab("personal")}>
                        Результаты
                    </button>
                </nav>
                {tab === "personal" && (
                    <div className="person-tabs">
                        <button className={person === 1 ? "selected" : ""} onClick={() => setPerson(1)}>
                            {s.first.name}
                        </button>
                        <button className={person === 2 ? "selected" : ""} onClick={() => setPerson(2)}>
                            {s.name}
                        </button>
                    </div>
                )}

                {tab === "matches" && (
                    <div className="brand-statistics" style={{ padding: '15px', background: '#f8fafc', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ marginBottom: '10px', fontSize: '15px', color: '#414345' }}>Совпадение вкусов по брендам:</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {Object.entries(result).map(([brand, percent]) => (
                                <li key={brand} style={{ display: 'flex', justifyContent: 'between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>{brand}:</span>
                                    <span style={{ marginLeft: 'auto', color: '#10b981', fontWeight: 'bold' }}>{percent}%</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="liked-count-info" style={{ padding: '0 10px', marginBottom: '15px', fontSize: '15px', color: '#e5e7eb', fontWeight: 500 }}>
                    {tab === "matches" ? (
                        <span>Совпало пар: <strong style={{ color: '#10b981' }}>{shown.length}</strong> из 20</span>
                    ) : (
                        <span> Понравилось пар: <strong style={{ color: '#10b981' }}>{person === 1 ? s.first.likes.length : mine.length}</strong> из 20</span>
                    )}
                </div>

                {shown.length ? (
                    <div className="movie-grid">
                        {shown.map((id) => {
                            const m = movies.find((x) => x.id === id);
                            return m ? (
                                <div key={id} title={m.title}>
                                    <Poster movie={m} small />
                                </div>
                            ) : null;
                        })}
                    </div>
                ) : tab === "matches" ? (
                    <div className="empty-state">
                        <HeartCrack size={50} />
                        <h2>Общих лайков пока нет</h2>
                        <p>У вас не нашлось ни одного общего мэтча по моделям.
                            Попробуйте свайпнуть заново!</p>
                    </div>
                ) : (
                    <div
                        className="empty-state">
                        <HeartCrack size={50} />
                        <h2>В этот раз без мэтчей</h2>
                        <p></p>
                    </div>

                )}
                <div className="result-footer">
                    <button
                        onClick={() => {
                            clearSession();
                            nav("/");
                        }}

                    >
                        <RotateCcw size={16} /> Завершить
                    </button>
                </div>
            </section>
        </main>
    );
}

export { ResultPage };