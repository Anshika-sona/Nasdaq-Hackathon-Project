"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, Pause, ArrowLeft, MessageCircle, Clock, Volume2, Search, Brain } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface TranscriptItem {
  timestamp: string
  text: string
}

interface VideoData {
  url: string
  duration: string
  transcript: TranscriptItem[]
}

export default function VideoPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(875) // 14:35 in seconds
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const router = useRouter()

  const transcriptData = [
    {
      timestamp: "00:00",
      text: "Welcome to our comprehensive employee training on advanced data analytics and business intelligence",
    },
    {
      timestamp: "00:05",
      text: "In this module, we'll explore how AI-powered tools can enhance your decision-making capabilities",
    },
    {
      timestamp: "00:10",
      text: "Our platform integrates seamlessly with existing enterprise systems for maximum efficiency",
    },
    {
      timestamp: "00:15",
      text: "Let's examine real-world case studies where intelligent video search improved learning outcomes",
    },
    {
      timestamp: "00:20",
      text: "The Nasdaq GenAI technology enables natural language queries for instant content discovery",
    },
    {
      timestamp: "00:25",
      text: "By the end of this session, you'll master advanced techniques for video-based knowledge extraction",
    },
  ]

  useEffect(() => {
    // Load video data from localStorage
    const storedData = localStorage.getItem("videoData")
    if (storedData) {
      setVideoData(JSON.parse(storedData))
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSendQuery = async () => {
    if (!query.trim()) return

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
          video_data: videoData,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setMessages((prev) => [...prev, `You: ${query}`, `AI: ${data.response}`])
      } else {
        setMessages((prev) => [
          ...prev,
          `You: ${query}`,
          "AI: Based on the training content, I can help you understand the key concepts about data analytics and AI-powered decision making. What specific aspect would you like me to explain further?",
        ])
      }
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        `You: ${query}`,
        "AI: I'm analyzing the training video content to provide you with the most relevant information. This video covers advanced analytics techniques that can significantly improve your workflow efficiency.",
      ])
    }

    setQuery("")
  }

  const handleTimestampClick = (timestamp: string) => {
    const [mins, secs] = timestamp.split(":").map(Number)
    const totalSeconds = mins * 60 + secs
    setCurrentTime(totalSeconds)
  }

  const goBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={goBack}
              variant="ghost"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Learning Studio
              </h1>
              <p className="text-gray-600 text-sm mt-1">Intelligent Video Content Assistant</p>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">AI Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[750px]">
          {/* Video Player Section - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Video Player Area */}
            <div className="h-2/3 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex flex-col justify-between p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-slate-900/50"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Enterprise Training Video</span>
                    <p className="text-white/70 text-sm">Advanced Analytics & AI Decision Making</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white/70">
                  <Volume2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {/* Play button centered */}
              <div className="relative z-10 flex-1 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="w-24 h-24 bg-white/15 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-all duration-300 rounded-full border border-white/20 hover:scale-110 shadow-2xl"
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12 text-white fill-current" />
                  ) : (
                    <Play className="w-12 h-12 text-white fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Progress bar and time */}
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between text-sm text-white/90 font-mono">
                  <span className="bg-black/30 px-3 py-1 rounded-full">{formatTime(currentTime)}</span>
                  <span className="bg-black/30 px-3 py-1 rounded-full">{formatTime(duration)}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full cursor-pointer overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 rounded-full shadow-lg"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enhanced Transcript section */}
            <div className="h-1/3 flex flex-col">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-4 font-semibold flex items-center gap-3">
                <Search className="w-5 h-5" />
                Smart Transcript & Search
                <div className="ml-auto bg-white/20 px-3 py-1 rounded-full text-xs">AI-Powered</div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 p-6 space-y-4 text-sm overflow-y-auto">
                {transcriptData.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-200 border border-transparent hover:border-blue-200 hover:shadow-md group"
                  >
                    <button
                      onClick={() => handleTimestampClick(item.timestamp)}
                      className="text-blue-600 font-mono hover:text-purple-600 cursor-pointer font-bold min-w-[60px] text-left bg-blue-100 px-3 py-1 rounded-lg group-hover:bg-blue-200 transition-colors"
                    >
                      {item.timestamp}
                    </button>
                    <span className="text-gray-700 leading-relaxed flex-1">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Chat Section - Takes 1 column */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-5 font-semibold flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">AI Learning Assistant</div>
                <div className="text-xs text-white/80">Powered by Nasdaq GenAI</div>
              </div>
            </div>

            {/* Chat messages area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50">
              {messages.length === 0 ? (
                <div className="text-center mt-12 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-gray-600 space-y-3">
                    <p className="font-bold text-lg text-gray-800">Ask me about this training!</p>
                    <p className="text-sm leading-relaxed max-w-xs mx-auto">
                      I can help you understand analytics concepts, find specific topics, or clarify any training
                      material.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="bg-white/60 px-3 py-2 rounded-lg text-gray-600 border border-blue-100">
                      💡 "Explain the AI decision-making process"
                    </div>
                    <div className="bg-white/60 px-3 py-2 rounded-lg text-gray-600 border border-purple-100">
                      🔍 "Find the section about data analytics"
                    </div>
                    <div className="bg-white/60 px-3 py-2 rounded-lg text-gray-600 border border-green-100">
                      📊 "What are the key learning outcomes?"
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-2xl max-w-[90%] shadow-sm ${
                        message.startsWith("You:")
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white ml-auto"
                          : "bg-white text-gray-800 border border-gray-200 shadow-md"
                      }`}
                    >
                      <div className="font-semibold text-xs mb-2 opacity-80">
                        {message.startsWith("You:") ? "You" : "AI Learning Assistant"}
                      </div>
                      <div className="leading-relaxed">{message.replace(/^(You:|AI:)\s*/, "")}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Chat input */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about the training content..."
                  className="flex-1 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent py-3 px-4"
                  onKeyPress={(e) => e.key === "Enter" && handleSendQuery()}
                />
                <Button
                  onClick={handleSendQuery}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  Ask AI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
