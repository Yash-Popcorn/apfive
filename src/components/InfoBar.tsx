export default function InfoBar() {
    const title = "Practice countless of multiple choice questions"
    return (
        <div
            className="max-w-screen h-72 bg-teal-100 select-none flex p-10"
        > 
            
            <p
                className="text-black font-serif font-semibold text-3xl w-[40%] animate-highlight h-10"
            >
                {title}
            </p>
        </div>
    )
}