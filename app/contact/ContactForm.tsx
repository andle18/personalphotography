"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { FormEvent, useState } from "react";

const MAX_CHARS = 500;

type SendState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [sendState, setSendState] = useState<SendState>("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSendState("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      window.clearTimeout(timeoutId);

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setSendState("error");
        setFeedback(
          result.error ?? "Could not send message. Please try again.",
        );
        return;
      }

      sendGAEvent("event", "contact_form_submit", {
        form_name: "contact",
        page_path: "/contact",
      });

      form.reset();
      setCharCount(0);
      setSendState("success");
      setFeedback("Message sent. I will reply as soon as possible.");
    } catch (error) {
      window.clearTimeout(timeoutId);
      setSendState("error");
      setFeedback(
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Please try again."
          : "Could not send message. Please try again.",
      );
    }
  };

  if (sendState === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-10 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
          <svg
            className="h-7 w-7 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-white/60">
          Got it. I will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setSendState("idle");
            setFeedback("");
            setCharCount(0);
          }}
          className="mt-2 rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-white"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-white"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Message
            </label>
            <span
              className={`text-xs tabular-nums ${charCount > MAX_CHARS ? "text-red-400" : "text-white/40"}`}
            >
              {charCount}/{MAX_CHARS}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={MAX_CHARS}
            onChange={(e) => setCharCount(e.target.value.length)}
            className="mt-2.5 block w-full rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-white/50 focus:outline-2 focus:-outline-offset-2 focus:outline-white/50"
            placeholder="Tell me about your idea..."
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        {feedback && (
          <p
            className={`text-sm ${sendState === "error" ? "text-red-300" : "text-white/60"}`}
            aria-live="polite"
          >
            {feedback}
          </p>
        )}

        <button
          type="submit"
          disabled={sendState === "sending" || charCount > MAX_CHARS}
          className="ml-auto rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sendState === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
