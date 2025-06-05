"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [history, setHistory] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when new messages arrive (only if open)
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history, isOpen]);

  const handleSend = async () => {
    const trimmed = currentInput.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { role: "user", content: trimmed }]);
    setCurrentInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        console.error("API error:", data);
        setHistory((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      } else {
        setHistory((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
      setHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Network error—please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Closed state: show only a circular Bot icon, pulsing
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
        className="
          fixed bottom-4 right-4 z-50 
          flex h-14 w-14 items-center justify-center 
          rounded-full bg-primary text-primary-foreground 
          shadow-lg hover:bg-primary/90 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          animate-pulse
        "
      >
        <Bot className="h-6 w-6" />
      </button>
    );
  }

  // Open state: show full chat window
  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-full flex flex-col bg-background rounded-xl shadow-xl border border-border z-50">
      {/* Header with Close button */}
      <div className="px-4 py-2 bg-primary text-primary-foreground rounded-t-xl flex justify-between items-center">
        <h2 className="text-lg font-semibold">Chat with us</h2>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
          className="rounded-full p-1 hover:bg-primary/20 transition-colors"
        >
          <X className="h-5 w-5 text-primary-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-background"
        style={{ maxHeight: "60vh" }}
      >
        {history.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-2 rounded-lg bg-card border border-border text-foreground animate-pulse">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 py-2 border-t border-border bg-background rounded-b-xl flex gap-x-2">
        <textarea
          rows={2}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 resize-none rounded-md border border-border bg-background p-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="flex items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
