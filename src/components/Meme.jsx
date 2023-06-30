import memesData from "../memesData.jsx"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    let url
    
    function getRandomImage() {
        let num = Math.floor(Math.random() * 100);
        
        return console.log(memesData.data.memes[num].url);
    }
    
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getRandomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}