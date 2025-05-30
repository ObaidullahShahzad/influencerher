import Image from "next/image";
import React from "react";

interface ButtonImageProps {
  text: string;
  onClick: () => void;
  showAll: boolean;
}

const ButtonImage: React.FC<ButtonImageProps> = ({
  text,
  showAll,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block border-none bg-transparent"
    >
      {/* Responsive Background Image */}
      <Image
        width={350}
        height={80}
        src="/buttons.png"
        alt="Button"
        className="w-[180px] h-auto md:w-[180px] sm:w-[180px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Centered Text with Optional Icon */}
      <span className="absolute inset-0 flex items-center justify-center text-white font-normal text-[24px] md:text-[18px] sm:text-[16px] gap-2">
        <span className="md:text-[18px] text-[16px] lg:text-[18px]">
          {showAll ? "SHOW LESS" : text}
        </span>
      </span>
    </button>
  );
};

export default ButtonImage;
