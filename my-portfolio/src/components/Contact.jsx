import { useActionState, useState } from "react";

function Contact() {
    // Form state
    const [formData, setFormData] = useActionState({
        name: '',
        email: '',
        message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        console.log("Form submitted:", formData);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };
    
    return (
        <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto max-w-3xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    📧 Contact Me
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    Have a project in mind? Let's talk!
                </p>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
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
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter your name"
                        />
                    </div>
                    
                    {/* Email Input */}
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
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                            placeholder="Enter your email"
                        />
                    </div>
                    
                    {/* Message Input */}
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
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                        {submitted ? "✓ Sent Successfully!" : "Send Message 📨"}
                    </button>
                </form>
                
                {/* Social Links */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Or connect with me on:</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/yourusername" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;