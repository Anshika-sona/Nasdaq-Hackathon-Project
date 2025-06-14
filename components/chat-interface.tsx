"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

interface ChatInterfaceProps {
  onSendMessage?: (message: string) => Promise<string>
  className?: string
}

export default function ChatInterface({ onSendMessage, className = "" }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendQuery = async () => {
    if (!query.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = onSendMessage
        ? await onSendMessage(query)
        : "I understand your question about the video content. Let me analyze that for you..."

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setQuery("")
    }
  }

  return (
    <div
      className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex flex-col overflow-hidden ${className}`}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 font-semibold flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />
        AI Assistant
      </div>

      {/* Chat messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center mt-8 space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-gray-600">
              <p className="font-medium">Ask me anything about this video!</p>
              <p className="text-sm mt-2">
                I can help you understand the content, find specific moments, or answer questions.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-xl max-w-[85%] ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-white text-gray-800 shadow-sm border border-gray-200"
                }`}
              >
                <div className="font-medium text-xs mb-1 opacity-70">
                  {message.sender === "user" ? "You" : "AI Assistant"}
                </div>
                <div>{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="bg-white text-gray-800 shadow-sm border border-gray-200 p-3 rounded-xl max-w-[85%]">
                <div className="font-medium text-xs mb-1 opacity-70">AI Assistant</div>
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about the video..."
            className="flex-1 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && handleSendQuery()}
            disabled={isLoading}
          />
          <Button
            onClick={handleSendQuery}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading || !query.trim()}
          >
            {isLoading ? "..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  )
}
