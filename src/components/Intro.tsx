const message = "Study for AP subjects"
const submessage = "All in one AP study practice for FREE and get feedback from our AI bot"

export default function Intro() {
    return (
        <div
            className="max-w-screen h-72 bg-slate-50 select-none"
        >    
            <p
                className="text-center text-5xl font-sans font-black text-slate-700 pt-12 antialiased md:text-7xl"
            >
                {message}
            </p>
            <p
                className="text-center text-2xl font-sans font-medium text-slate-600 pt-2 antialiased truncate px-16 mb-8"
            >
                {submessage}
            </p>
            <div
                className="flex justify-center"
            >
                <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg h-12 w-64 text-white font-semibold transition ease-in-out hover:scale-110"
                >
                    Start Now
                </button>
            </div>
        </div>
    )
}