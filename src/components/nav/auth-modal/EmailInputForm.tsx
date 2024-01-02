import * as z from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { signIn } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthModalContext } from "@/context/AuthModalContext"

const formSchema = z.object({
  email: z.string().email(),
})

export default function EmailInputForm() {
  const { modalOption, setPrevModalOption, setEmailStatus, setModalOption } =
    useAuthModalContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const signInWithEmail = async (values: z.infer<typeof formSchema>) => {
    const signInResults = await signIn("email", {
      email: values.email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    })

    if (!signInResults?.ok) {
      setPrevModalOption(modalOption)
      setEmailStatus("failure")
      setModalOption("emailStatus")
    }
    setPrevModalOption(modalOption)
    setEmailStatus("success")
    setModalOption("emailStatus")
  }

  return (
    <div className="text-left w-full">
      <Form {...form}>
        <form
          className="flex flex-col gap-2 w-full"
          noValidate
          onSubmit={form.handleSubmit(signInWithEmail)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="flex-start text-left">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete={"off"}
                      placeholder="user@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button type="submit" className="w-full" size="auth">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
