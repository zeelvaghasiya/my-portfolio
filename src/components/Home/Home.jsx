import React, { useEffect, useState } from "react";
import zeelImage from "../../temp/zeel.jpg";

function Home() {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const texts = ["React Developer", "Frontend Enthusiast", "UI Designer"];

  useEffect(() => {
    let typingSpeed = 150;
    let deletingSpeed = 100;

    if (isDeleting) {
      setTimeout(() => {
        setDisplayedText((prevText) =>
          texts[index].substring(0, prevText.length - 1)
        );
      }, deletingSpeed);
    } else {
      setTimeout(() => {
        setDisplayedText((prevText) =>
          texts[index].substring(0, prevText.length + 1)
        );
      }, typingSpeed);
    }

    // When the word is fully typed out
    if (!isDeleting && displayedText === texts[index]) {
      setTimeout(() => setIsDeleting(true), 1000); // Wait for 1s before deleting
    }

    // When the word is fully deleted
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next word
    }
  }, [displayedText, isDeleting, index]);

  return (
    <div className="h-full bg-primary">
      <section className="container mx-auto max-w-6xl px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* <!-- Image Section --> */}
        <div className="order-1 md:order-2 flex justify-center items-center px-4 py-8 md:px-6 md:py-6">
          <div className="w-80 h-80 rounded-full border-8 overflow-hidden relative">
            <img
              className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
              src={zeelImage}
              alt="Zeel"
            />
          </div>
        </div>

        {/* <!-- Text Section --> */}
        <div className="order-2 md:order-1 text-center md:text-left px-4 py-8 md:px-6 md:py-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Hi, I'm <span className="text-secondary">Zeel</span>{" "}
            <span className="wave">👋</span>
          </h1>
          <h1 className="text-2xl font-bold text-white mt-4">
            and I am{" "}
            <span
              className={`text-secondary text-2xl font-bold ${
                isDeleting ? "deleting-text" : "typing-text"
              }`}
            >
              {displayedText}
            </span>
          </h1>
          <p className="text-gray-600 mt-6 md:mt-8 lg:mt-10 max-w-xl mx-auto md:mx-0 text-2xl">
            A passionate Full Stack Software Developer having a special interest
            in Frontend technologies and experience of building Web applications
            with JavaScript, React.js, Node.js, and other cool libraries and
            frameworks.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <a
              href="https://github.com"
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-purple-700"
            >
              View on Github
            </a>
            <a
              href="https://linkedin.com"
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700"
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
