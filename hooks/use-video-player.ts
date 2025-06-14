"use client"

import { useState, useEffect, useRef } from "react"

export interface UseVideoPlayerProps {
  duration?: number
  autoPlay?: boolean
}

export function useVideoPlayer({ duration = 875, autoPlay = false }: UseVideoPlayerProps = {}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return duration
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, duration])

  const play = () => setIsPlaying(true)
  const pause = () => setIsPlaying(false)
  const toggle = () => setIsPlaying(!isPlaying)
  const seek = (time: number) => setCurrentTime(Math.max(0, Math.min(time, duration)))
  const reset = () => {
    setCurrentTime(0)
    setIsPlaying(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    play,
    pause,
    toggle,
    seek,
    reset,
    setVolume,
    formatTime,
    progress: (currentTime / duration) * 100,
  }
}
