"use client";
import Dock from "@/components/Dock";
import { useRouter } from "next/navigation";
import { VscAccount, VscHome, VscSettingsGear } from "react-icons/vsc";

import { MdContactMail } from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Menu = () => {
  const router = useRouter();
  const items = [
    {
      icon: <VscHome size={24} color="cyan" />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <VscAccount size={24} color="cyan" />,
      label: "About",
      onClick: () => router.push("#about"),
    },
    {
      icon: <VscSettingsGear size={24} color="cyan" />,
      label: "Services",
      onClick: () => router.push("#services"),
    },
    {
      icon: <RiNextjsLine size={24} color="cyan" />,
      label: "Projects",
      onClick: () => router.push("#projects"),
    },
    {
      icon: <MdContactMail size={24} color="cyan" />,
      label: "Contact",
      onClick: () => router.push("#contact"),
    },

    {
      label: "WhatsApp",
      onClick: () => router.push("https://wa.me/37066409476?text=Hello"),
      icon: <FaWhatsapp size={24} color="cyan" />,
    },
    {
      label: "LinkedIn",
      onClick: () =>
        router.push(
          "https://www.linkedin.com/in/yahia-soliman-9a97963a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        ),
      icon: <FaLinkedin size={24} color="cyan" />,
    },
    {
      label: "GitHub",
      onClick: () => router.push("https://github.com/yahia-nasser"),
      icon: <FaGithub size={24} color="cyan" />,
    },
  ];
  return (
    <Dock
      className="fixed bottom-20 left-1/2 z-100 text-white cursor-pointer rounded-2xl backdrop-blur-xl border hidden md:flex"
      items={items}
      panelHeight={70}
      baseItemSize={40}
      magnification={65}
    />
  );
};

export default Menu;
