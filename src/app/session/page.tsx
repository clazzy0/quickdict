import DictionaryInformation from "@/components/DictionaryInformation"
import SessionControlBar from "@/components/SessionControlBar"

export default function Session() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <DictionaryInformation />
      <SessionControlBar />
    </div>
  )
}
