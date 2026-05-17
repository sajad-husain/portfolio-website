import { useState } from "react";

function CounterGame() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const increaseScore = () => {
        setScore((prev) => {
            const next = prev + 1;
            if (next > highScore) setHighScore(next);
            return next;
        });
    };

    const decreaseScore = () => {
        setScore((prev) => prev - 1);
    };

    const resetScore = () => {
        setScore(0);
    };

    const [isDark, setIsDark] = useState(false);
    const toggleDarkMode = () => {
        setIsDark((prev) => !prev);
    };

    const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
    const textColor = isDark ? "text-white" : "text-gray-900";
    const cardBg = isDark ? "bg-gray-800" : "bg-white";

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 p-8`}>
            <div className="flex justify-end mb-8">
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-all"
                >
                    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            <div className={`max-w-md mx-auto ${cardBg} rounded-2xl shadow-2xl p-8 text-center`}>
                <h1 className="text-3xl font-bold mb-6">
                    🎮 My Game Score
                </h1>

                <div className="text-8xl font-bold mb-8 text-blue-500">
                    {score}
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={decreaseScore}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-all hover:scale-105"
                        aria-label="Decrease score by 1"
                    >
                        −1
                    </button>

                    <button
                        onClick={increaseScore}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-all hover:scale-105"
                        aria-label="Increase score by 1"
                    >
                        +1
                    </button>

                    <button
                        onClick={resetScore}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-all hover:scale-105"
                        aria-label="Reset score to zero"
                    >
                        Reset
                    </button>
                </div>

                <div className="mt-6 text-sm">
                    {score === 0 && <p>🎯 Start playing!</p>}
                    {score > 0 && score < 5 && <p>👍 Getting there!</p>}
                    {score >= 5 && score < 10 && <p>🔥 On fire!</p>}
                    {score >= 10 && <p>🏆 Champion!</p>}
                    {score > 10 && <div className="mt-4 text-yellow-500">⭐ You got a Star!</div>}
                    <div className="mt-4 text-red-500">High Score: {highScore}</div>
                </div>
            </div>
        </div>
    );
}

export default CounterGame;
