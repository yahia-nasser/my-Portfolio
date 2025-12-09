"use client";

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaAngleDoubleDown,
} from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201033412951?text=Hello",
    icon: <FaWhatsapp />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yahia-nasser-971805393?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/yahia-nasser",
    icon: <FaGithub />,
  },
];

export default function SocialList() {
  return (
    <div>
      <h2 className="text-white text-xl md:text-4xl text-center mb-4 flex justify-center items-center gap-2">
        Get In Touch <FaAngleDoubleDown className="text-[cyan]" />
      </h2>
      <ul className="flex flex-col gap-10 text-xl md:text-4xl border border-cyan-400 rounded-2xl p-7 text-white transition-all">
        {socialLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target="_blank"
              className="flex items-center gap-2 px-2 py-1 transition-all hover:bg-cyan-500 hover:ms-2 rounded"
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
