const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export interface VideoProcessRequest {
  url: string
}

export interface VideoProcessResponse {
  success: boolean
  video_id: string
  duration: string
  transcript: Array<{
    timestamp: string
    text: string
  }>
}

export interface ChatRequest {
  query: string
  video_data?: any
}

export interface ChatResponse {
  response: string
  timestamp: string
}

export const apiClient = {
  async processVideo(data: VideoProcessRequest): Promise<VideoProcessResponse> {
    const response = await fetch(`${API_BASE_URL}/api/process-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to process video")
    }

    return response.json()
  },

  async sendChatMessage(data: ChatRequest): Promise<ChatResponse> {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to send chat message")
    }

    return response.json()
  },
}
