import { Button } from "@/app/ui/shadcn/ui/button"
import { useAuthModalContext } from "@/app/lib/context"

export default function EmailStatus() {
  const { prevModalOption, emailStatus, setModalOption, closeModal } =
    useAuthModalContext()

  return (
    <div className="flex flex-col w-full max-w-xs">
      <h3 className="text-center text-[22px] font-semibold tracking-tight mb-3">
        {emailStatus === "success"
          ? "Check your inbox!"
          : "Something went wrong."}
      </h3>
      <div className="text-center text-sm text-gray-500 mb-6">
        {emailStatus === "success" ? (
          <p>
            Click the magic link sent to your email <br />
            for a secure passwordless authentication.
          </p>
        ) : (
          <p>
            Please try another authentication <br />
            provider or contact support.
          </p>
        )}
      </div>

      <div className="flex flex-row justify-center gap-3">
        <Button
          variant="secondary"
          onClick={() => setModalOption(prevModalOption)}
        >
          Back
        </Button>
        <Button onClick={() => closeModal()}>Done</Button>
      </div>
    </div>
  )
}
