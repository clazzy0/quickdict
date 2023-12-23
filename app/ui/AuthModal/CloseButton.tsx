import React from "react"

export default function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex justify-end" style={{ height: "60px" }}>
      <button
        className="group relative w-4 h-4 bg-transparent flex items-center justify-center active:scale-92"
        onClick={() => onClose()}
      >
        <div
          className="absolute w-full bg-gray-500 group-hover:bg-black" // Change color on hover
          style={{ height: "1.5px", transform: "rotate(45deg)" }}
        ></div>
        <div
          className="absolute w-full bg-gray-500 group-hover:bg-black" // Change color on hover
          style={{ height: "1.5px", transform: "rotate(-45deg)" }}
        ></div>
      </button>
    </div>
  )
}
