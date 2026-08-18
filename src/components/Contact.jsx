import { useState, useEffect, useRef } from "react";

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
            className="section-container bg-white dark:bg-gray-900"
            aria-labelledby="contact-title"
        >
            <div className="container mx-auto max-w-3xl">
                <h2 id="contact-title" className="section-title">
                    Contact Me
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Have a project in mind? Let's talk!
                </p>

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

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Or connect with me on:</p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
