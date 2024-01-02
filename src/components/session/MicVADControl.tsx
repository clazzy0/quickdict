"use client"

import "@/app/globals.css"
import Image from "next/image"
import pauseIcon from "/public/pause-icon.svg"
import micIcon from "/public/mic-icon.svg"
import * as ort from "onnxruntime-web"
import { useState } from "react"
import { useMicVAD, utils } from "@ricky0123/vad-react"
import { Button } from "../ui/button"

ort.env.wasm.wasmPaths = {
  "ort-wasm-simd-threaded.wasm": "/ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm": "/ort-wasm-simd.wasm",
  "ort-wasm.wasm": "/ort-wasm.wasm",
  "ort-wasm-threaded.wasm": "/ort-wasm-threaded.wasm",
}

export default function MicVADControl() {
  const [audioList, setAudioList] = useState<string[]>([])
  const [isRecording, setIsRecording] = useState(false)

  const vad = useMicVAD({
    startOnLoad: false,
    submitUserSpeechOnPause: false,
    modelURL: "/silero_vad.onnx",
    workletURL: "/vad.worklet.bundle.min.js",
    onVADMisfire: () => {
      console.log("Vad misfire")
    },
    onSpeechStart: () => {
      console.log("Speech start")
    },
    onSpeechEnd: (audio) => {
      console.log("Speech end")
      const wavBuffer = utils.encodeWAV(audio)
      const base64 = utils.arrayBufferToBase64(wavBuffer)
      const url = `data:audio/wav;base64,${base64}`
      setAudioList((old) => [url, ...old])
    },
  })

  const toggleVad = () => {
    setIsRecording(!isRecording)
    vad.toggle()
  }

  return (
    <section className="flex flex-col items-center">
      <ul>
        {audioList.map((audioURL) => {
          return (
            <li key={audioURL.substring(-10)}>
              <audio controls src={audioURL} />
            </li>
          )
        })}
      </ul>
      <div className="fixed flex flex-row items-center xs:bottom-20 bottom-10 gap-3">
        {vad.userSpeaking ? <div>rnon</div> : <div>noon</div>}
        {/* Fix to isRecording */}
        {!isRecording ? (
          <Button
            className="h-[70px] w-[70px] rounded-full"
            size="noSize"
            onClick={toggleVad}
          >
            <Image
              src={micIcon}
              alt="mic button icon"
              height={35}
              width={35}
              className="noSelect"
            />
          </Button>
        ) : (
          <Button
            className="border-2 border-black rounded-full h-[70px] w-[70px]"
            variant="mic"
            onClick={toggleVad}
          >
            <Image
              src={pauseIcon}
              alt="mic button icon"
              height={35}
              width={35}
              className="noSelect"
            />
          </Button>
        )}
        <div>Time</div>
      </div>
    </section>
  )
}
