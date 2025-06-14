import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-8">
      {/* Top section with two columns */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-6">the project</h2>
            <p className="text-[#000000] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#000000] mb-6">the team</h2>
            <p className="text-[#000000] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
              <br />
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
      </div>

      {/* Middle section with button and input */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex">
          <Button className="bg-[#3288d4] hover:bg-[#5463c6] text-white px-16 py-6 text-lg font-medium rounded-none">
            Try it
          </Button>
          <Input
            placeholder="enter link here..."
            className="flex-1 px-6 py-6 text-lg border border-[#000000] rounded-none focus:ring-0 focus:border-[#000000]"
          />
        </div>
      </div>

      {/* Bottom section with video player and chat */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-0 h-[600px]">
          {/* Video player section */}
          <div className="border border-[#000000] flex flex-col">
            {/* Video player area */}
            <div className="flex-1 bg-[#ffffff] flex flex-col justify-between p-6">
              <div className="text-lg font-medium text-[#000000] mb-4">Video player</div>

              {/* Play button centered */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#d9d9d9] flex items-center justify-center">
                  <Play className="w-8 h-8 text-[#a1a1a1] fill-current" />
                </div>
              </div>

              {/* Progress bar and time */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-[#000000]">
                  <span>14:35</span>
                  <span>14:35</span>
                </div>
                <div className="w-full h-1 bg-[#d9d9d9]">
                  <div className="h-full bg-[#000000] w-0"></div>
                </div>
              </div>
            </div>

            {/* Transcript section */}
            <div className="bg-[#5463c6] text-white px-4 py-2 font-medium">Transcript</div>
            <div className="bg-[#a1a1a1] p-4 space-y-2 text-sm">
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:00</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:05</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:10</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:15</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:20</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#000000] font-mono">00:25</span>
                <span className="text-[#000000]">lorem ipsum chicka chicka</span>
              </div>
            </div>
          </div>

          {/* Right gray section with chat */}
          <div className="bg-[#a1a1a1] flex flex-col justify-end p-6">
            <div className="flex gap-2">
              <Input placeholder="Enter your query.." className="flex-1 bg-[#ffffff] border-[#000000] rounded-none" />
              <Button className="bg-[#5463c6] hover:bg-[#3288d4] text-white px-6 rounded-none">send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
