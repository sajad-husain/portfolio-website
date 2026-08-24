import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

// TODO: create a form at https://formspree.io and paste your form ID below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});
    const timerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setStatus("sending");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formData),
            });
            setStatus(res.ok ? "sent" : "error");
        } catch {
            setStatus("error");
        }

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setStatus("idle");
            setFormData(INITIAL_FORM);
        }, 3000);
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
            errors[field]
                ? "border-red-500 dark:border-red-400"
                : "border-gray-300 dark:border-gray-600"
        }`;

    return (
        <section
            id="contact"
            className="section-container"
            aria-label="Contact me"
        >
            <div className="container mx-auto max-w-6xl">
                <SectionHeader
                    index="05"
                    id="contact"
                    title="Contact Me"
                    subtitle="Have a project in mind? Let's talk!"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h3 className="text-2xl font-bold text-ink-primary mb-4">
                            Let's build something together.
                        </h3>
                        <p className="text-ink-secondary leading-relaxed mb-8">
                            Whether you have a project idea, a job opportunity, or just want to
                            talk shop about the MERN or PERN stack — my inbox is always open.
                        </p>
                        <div className="space-y-4">
                            <a
                                href="mailto:sajjad@example.com"
                                className="block font-mono text-sm text-accent-soft hover:text-accent transition-colors"
                            >
                                sajjad@example.com
                            </a>
                            <div className="flex gap-6 md:justify-start justify-center">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink-secondary hover:text-ink-primary transition-colors"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={inputClass("name")}
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={inputClass("email")}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                            className={inputClass("message")}
                            placeholder="Tell me about your project..."
                        ></textarea>
                        {errors.message && (
                            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {status === "sent" && (
                        <p className="text-sm text-emerald-400" role="status">
                            Message sent successfully — I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-sm text-red-400" role="alert">
                            Something went wrong. Please email me directly instead.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full btn-primary py-3 px-6 text-lg disabled:opacity-60"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
