"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Play, Users, Target, Search, Brain, Zap, Code, Database } from "lucide-react"

export default function LandingPage() {
  const [link, setLink] = useState("")
  const router = useRouter()

  const handleTryIt = async () => {
    if (!link.trim()) {
      alert("Please enter a link")
      return
    }

    try {
      // Send link to Flask backend
      const response = await fetch("http://localhost:5000/api/process-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      })

      if (response.ok) {
        const data = await response.json()
        // Store video data in localStorage or state management
        localStorage.setItem("videoData", JSON.stringify(data))
        // Navigate to video player page
        router.push("/video")
      } else {
        alert("Error processing video")
      }
    } catch (error) {
      console.error("Error:", error)
      // For demo purposes, navigate anyway
      router.push("/video")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full text-blue-700 font-medium mb-6 border border-blue-200/50">
              <Zap className="w-4 h-4" />
              Powered by Nasdaq GenAI Technology
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Intelligent Video Learning
              <br />
              <span className="text-5xl">Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your corporate training with AI-powered video intelligence that makes learning faster, smarter,
              and more efficient than ever before
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Project Section - Enhanced */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">The Project</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    An <span className="text-blue-600 font-semibold">intelligent video content assistant tool</span>{" "}
                    designed to revolutionize employee learning efficiency in corporate environments.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Smart Video Search:</strong> Instantly locate specific video segments using natural
                          language queries
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>AI-Powered Q&A:</strong> Get intelligent responses to subject-matter queries in
                          real-time
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Learning Optimization:</strong> Enhance knowledge retention through interactive
                          content exploration
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-gray-600" />
                      Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Python & Flask</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Nasdaq GenAI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">Modern Frontend</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium">AI/ML Models</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section - Lorem Ipsum */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">The Team</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Enhanced */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Learning?</h3>
                <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                  Experience the future of corporate training with our AI-powered video intelligence platform. Paste
                  your training video URL below and discover how we can revolutionize your learning experience.
                </p>

                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Input
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="Enter your training video URL here..."
                      className="flex-1 px-6 py-4 text-lg bg-white/95 border-0 rounded-xl focus:ring-2 focus:ring-white/50 placeholder:text-gray-500 font-medium"
                      onKeyPress={(e) => e.key === "Enter" && handleTryIt()}
                    />
                    <Button
                      onClick={handleTryIt}
                      className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                    >
                      <Play className="w-6 h-6" />
                      Start Learning
                      <ArrowRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="bg-white/60 backdrop-blur-sm py-24 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful features that make learning more efficient and engaging
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group text-center p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Video Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Find exactly what you're looking for with AI-powered semantic search that understands context and intent
              </p>
            </div>

            <div className="group text-center p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Q&A</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant, intelligent answers about video content using advanced Nasdaq GenAI technology
              </p>
            </div>

            <div className="group text-center p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Boost retention and comprehension with interactive transcripts and personalized learning paths
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Powered by Cutting-Edge Technology</h2>
          <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
            Built with enterprise-grade technologies for maximum performance, security, and scalability
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Python & Flask</h3>
              <p className="text-gray-400 text-sm">Robust backend architecture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Nasdaq GenAI</h3>
              <p className="text-gray-400 text-sm">Advanced AI capabilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm">Intelligent content analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Modern Frontend</h3>
              <p className="text-gray-400 text-sm">Responsive user experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
