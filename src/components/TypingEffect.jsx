import { useEffect, useState } from "react";

export default function TypingEffect({ words, typeSpeed = 80, deleteSpeed = 45, pause = 1600 }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout;

        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(word.slice(0, text.length + (deleting ? -1 : 1)));
                },
                deleting ? deleteSpeed : typeSpeed
            );
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return (
        <span className="font-mono text-accent-soft">
            {text}
            <span className="animate-cursor-blink" aria-hidden="true">|</span>
        </span>
    );
}
