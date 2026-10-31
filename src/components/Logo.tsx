import React from 'react';

export const Logo: React.FC<{ size?: number }> = ({ size = 130 }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <svg
                viewBox="0 0 900 900"
                width="100%"
                height="100%"
                xmlns="http://w3.org"
            >
                {/* Инвертируем рисунок в белый цвет с помощью CSS-фильтра и выводим оригинал */}
                <image
                    href="https://unsplash.com" // Временный плейсхолдер, сейчас заменим на ваш рисунок
                    width="900"
                    height="900"
                    style={{ filter: 'invert(1) brightness(2)' }}
                />

                {/* Идеальный контур по вашему эскизу в центре экрана */}
                <g stroke="#ffffff" strokeWidth="24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    {/* Нижняя подошва кроссовка */}
                    <path d="M 180 580 C 180 580, 140 630, 220 630 L 720 630 C 800 630, 800 580, 720 580 L 180 580 Z" fill="#ffffff" />
                    {/* Средний контур (над подошвой) */}
                    <path d="M 260 530 C 380 470, 520 460, 680 520" />
                    {/* Верхняя волна и воротник (язычок) */}
                    <path d="M 240 480 C 360 380, 460 370, 500 310 C 530 260, 560 260, 590 320 C 640 420, 710 380, 760 440" />
                </g>
            </svg>
        </div>
    );
};
