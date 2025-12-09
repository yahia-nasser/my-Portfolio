"use client";

import { useState } from "react";
import SocialList from "./ContactList";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    setStatus(
      res.ok ? "Message sent successfully!" : "Failed to send message."
    );
    form.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-[90%] md:flex-row md:w-[80%] gap-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex justify-center flex-col mx-auto space-y-4 bg-gray-600/40 border border-cyan-400 p-6 rounded-xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white">Send Me an Email</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 bg-black/50 border border-white/20 text-white rounded-md outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_15px_#00EEFF]"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 bg-black/50 border border-white/20 text-white rounded-md outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_15px_#00EEFF]"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="resize-none w-full p-3 bg-black/50 border border-white/20 text-white rounded-md outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_15px_#00EEFF]"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-[200px] mx-auto py-3 rounded-md font-semibold cursor-pointer text-[#3ffbff] bg-black border border-[#3ffbff] hover:bg-[#3ffbff] hover:text-black transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status && <p className="text-center text-cyan-300">{status}</p>}
      </form>
      <div className="w-[80%] md:w-1/4">
        <SocialList />
      </div>
    </div>
  );
}
