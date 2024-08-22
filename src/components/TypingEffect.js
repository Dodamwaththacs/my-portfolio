"use client";

import React, { useState, useEffect } from "react";

const TypingEffect = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setCurrentSpeed(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    currentSpeed,
  ]);

  return (
    <h3 className="mb-4">
      <span className="mr-1 text-[#FFFFFF] font-serif text-[30px] ">
        I'm a{" "}
      </span>
      <span className="font-bold text-[#FFB703] font-serif no-gap text-[49px] ">
        {text}
      </span>
      <span className="animate-blink">|</span>
    </h3>
  );
};

export default TypingEffect;
