import * as z from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/app/ui/shadcn/ui/form"
import { Input } from "@/app/ui/shadcn/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/app/ui/shadcn/ui/button"

const formSchema = z.object({
  email: z.string().email(),
})

export default function EmailInputForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const handleSubmit = () => {}

  return (
    <div className="text-left w-full">
      <Form {...form}>
        <form
          className="flex flex-col gap-2 w-full"
          noValidate
          onSubmit={form.handleSubmit(handleSubmit)}
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
