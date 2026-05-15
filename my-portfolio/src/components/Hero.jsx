
function Hero() {
    const myName = "Sajjad Hussain";  // 👈 Apna name likho
    
    const handleClick = () => {
        alert("🎉 Thanks for checking! More projects coming soon!");
        
        console.log("Button clicked at: " + new Date().toLocaleTimeString());
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-2xl mx-4 transform transition-all hover:scale-105 duration-300">
                
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Hi, I'm {myName} 👋
                </h1>
                
                <p className="text-2xl text-gray-600 mb-8">
                    Full-Stack Developer in Training 🚀
                </p>
                
                <button 
                    onClick={handleClick}  // ← Event handler
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                    🔍 Check My Work
                </button>
                
                    <div className="w-full bg-gray-200 rounded-full h-2">
                    </div>
                </div>
        </div>
    )}

export default Hero;