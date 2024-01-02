import DictionaryInformation from "@/components/session/DictionaryInformation"
import MicVADControl from "@/components/session/MicVADControl"

export default function Session() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-[48rem] items-center">
      {/* <DictionaryInformation /> */}
      <MicVADControl />
    </div>
  )
}
