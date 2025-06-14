"use client"

interface TranscriptItem {
  timestamp: string
  text: string
}

interface TranscriptProps {
  items: TranscriptItem[]
  onTimestampClick?: (timestamp: string) => void
  currentTime?: number
}

export default function Transcript({ items, onTimestampClick, currentTime = 0 }: TranscriptProps) {
  const parseTimestamp = (timestamp: string): number => {
    const [mins, secs] = timestamp.split(":").map(Number)
    return mins * 60 + secs
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-gray-50 p-4 space-y-3 text-sm overflow-y-auto rounded-lg">
      {items.map((item, index) => {
        const timestampSeconds = parseTimestamp(item.timestamp)
        const isActive =
          currentTime >= timestampSeconds &&
          (index === items.length - 1 || currentTime < parseTimestamp(items[index + 1]?.timestamp || "99:99"))

        return (
          <div key={index} className="flex gap-4 p-2 rounded-lg hover:bg-white/70 transition-colors duration-200">
            <button
              onClick={() => onTimestampClick?.(item.timestamp)}
              className={`font-mono hover:text-purple-600 cursor-pointer transition-colors min-w-[50px] text-left font-semibold ${
                isActive ? "text-purple-600" : "text-blue-600"
              }`}
            >
              {item.timestamp}
            </button>
            <span className={`leading-relaxed ${isActive ? "text-purple-700 font-medium" : "text-gray-700"}`}>
              {item.text}
            </span>
          </div>
        )
      })}
    </div>
  )
}
