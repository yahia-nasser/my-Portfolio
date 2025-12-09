import React from "react";
import Image from "next/image";
import clsx from "clsx";

const variants = {
  blue: "border-blue-500 bg-blue-50 text-blue-700",
  red: "border-red-500 bg-red-50 text-red-700",
  green: "border-green-500 bg-green-50 text-green-700",
  purple: "border-purple-500 bg-purple-50 text-purple-700",
};

interface PixelCardProps {
  variant?: keyof typeof variants;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PixelCard({
  variant = "blue",
  image,
  imageAlt = "card image",
  children,
  className = "",
}: PixelCardProps) {
  return (
    <div
      className={clsx(
        "border-2 rounded-xl shadow-sm pixel-card space-y-3 transition-shadow hover:shadow-[0_0_20px_#00EEFF]",
        variants[variant],
        className
      )}
    >
      {image && (
        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-black">
          <Image src={image} alt={imageAlt} fill className="object-contain" />
        </div>
      )}

      {children}
    </div>
  );
}
