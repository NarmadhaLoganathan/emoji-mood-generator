import { useState } from "react";

const emojiData = [
  { emoji: "😊", quote: "Happiness depends upon ourselves. – Aristotle" },
  { emoji: "😎", quote: "Stay cool, stay confident! – Walt Whitman" },
  { emoji: "😢", quote: "Tears come from the heart and not from the brain. – Leonardo da Vinci" },
  { emoji: "😂", quote: "Laughter is the best medicine. – Charlie Chaplin" },
  { emoji: "😡", quote: "For every minute you remain angry, you give up sixty seconds of peace. – Ralph Waldo Emerson" },
  { emoji: "😴", quote: "A good laugh and a long sleep are the best cures. – Irish Proverb" },
  { emoji: "🤩", quote: "Dream big and dare to fail. – Norman Vaughan" },
  { emoji: "🤔", quote: "Thinking is the hardest work there is. – Henry Ford" },
  { emoji: "🥳", quote: "Celebrate every tiny victory! – Oprah Winfrey" },
  { emoji: "😜", quote: "Live a little, laugh a lot! – Maya Angelou" },
  { emoji: "🤗", quote: "Hugs make everything better. – Virginia Satir" },
  { emoji: "💪", quote: "Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi" },
  { emoji: "💜", quote: "Love deeply, live passionately. – Narmadha" },
  { emoji: "👑", quote: "Wear your invisible crown and rule your world! – Queen Elizabeth II" },
  { emoji: "🌸", quote: "Let your dreams bloom like flowers. – Claude Monet" },
  { emoji: "👏", quote: "Applaud even the smallest victories. – Serena Williams" },
  { emoji: "🦋", quote: "Change is beautiful, just like a butterfly. – Richard Bach" },
  { emoji: "🌞", quote: "Rise and shine! The world needs your light. – Helen Keller" },
  { emoji: "🍀", quote: "Good luck follows those who work hard. – Thomas Jefferson" },
  { emoji: "🎵", quote: "Music speaks when words can’t. – Ludwig van Beethoven" },
  { emoji: "💡", quote: "Ideas shape the future, never stop thinking! – Nikola Tesla" },
  { emoji: "🚀", quote: "Shoot for the stars, and you might just land on the moon! – Neil Armstrong" }
];

const bgColors = [
  "bg-gradient-to-r from-green-400 to-blue-500",
  "bg-gradient-to-r from-pink-500 to-yellow-500",
  "bg-gradient-to-r from-purple-500 to-red-500",
  "bg-gradient-to-r from-blue-400 to-indigo-600",
  "bg-gradient-to-r from-teal-400 to-green-500",
  "bg-gradient-to-r from-orange-400 to-red-600"
];

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(emojiData[0]);
  const [bgColor, setBgColor] = useState(bgColors[0]);

  const generateRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojiData.length);
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    setCurrentEmoji(emojiData[randomIndex]);
    setBgColor(randomColor);
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${bgColor} text-white transition-all duration-500`}>
      <h1 className="text-4xl font-bold mb-2">Random Emoji Mood Generator 🎭</h1>
      <p className="text-lg mb-6 opacity-80">Generate a random emoji and get an inspiring quote!</p>
      
      <div className="bg-white text-black p-8 rounded-2xl shadow-lg flex flex-col items-center border-2 border-gray-200 
                      hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <span className="text-8xl hover:scale-125 transition-transform duration-300">{currentEmoji.emoji}</span>
        <p className="mt-4 text-lg font-semibold text-center hover:text-gray-700 transition-colors duration-300">
          {currentEmoji.quote}
        </p>
      </div>

      <button
        onClick={generateRandomEmoji}
        className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg 
                   hover:bg-yellow-500 hover:scale-110 transition-transform duration-300"
      >
        Generate Mood
      </button>
      
      <footer className="mt-10 text-center text-lg text-gray-300">
        “Your mood is your choice. Make it a good one! 😊”  
      </footer>
    </div>
  );
}

export default App;