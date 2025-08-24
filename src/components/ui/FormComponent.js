"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "./button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "./textarea"
import { useState } from "react"
import {  ArrowDown, ArrowDownCircleIcon, ArrowUp, Loader2, Upload } from "lucide-react"
const FormSchema = z.object({
  prompt: z.string().min(10, {
    message: "Please type at least 10 characters",
  }),
})

const FormComponent = ({updateChat,allChat}) => {
  const [loader,setLoader] = useState(false)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "",
    },
  })

async function onSubmit(data) {
    setLoader(true)

    // new user message
    const newMessage = { role: "User", content: data.prompt }

    // update both states
    updateChat((prevChat) => [...prevChat, newMessage])

    // use latest chat by appending directly
    const updatedChat = [...allChat, newMessage]

    try {
      const formattedPrompt = updatedChat
  .map((msg) => `${msg.role}: ${msg.content}`)
  .join("\n");
  
      const res = await fetch("/api/fitness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: formattedPrompt }),
      })

      if (!res.ok) {
        toast.error("Something went wrong. Please try again.")
        return
      }

      const response = await res.json()
      if (!response || !response.content) {
        toast.error("No response from PeakForm. Please try again.")
        return
      }
      if (response.error) {
        toast.error(response.error)
        return
      }

      const aiMessage = { role: "AI", content: response.content }
      updateChat((prevChat) => [...prevChat, aiMessage])
    } catch (err) {
      toast.error("Network error. Please try again.")
    } finally {
      form.reset()
      setLoader(false)
    }
  }

  return (
 <>
 <div   className="
mx-auto fixed  sm:left-[31%] bottom-0 w-full
          "> 
      {/* Form */}
      <Form {...form} className="  ">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
    className="w-[90%] left-7 sm:w-[60%]
            flex flex-col sm:flex-row items-center gap-3
            mx-auto sm:mx-0
            border-t border-accent-foreground/20 backdrop-blur-3xl
            p-3 sm:p-4 rounded-t-2xl shadow-lg"
        >
          {/* Input field */}
          <div className="flex-grow w-full ">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Ask your fitness question..."
                      {...field}
                      className="rounded-xl  md:text-lg resize-none px-4 py-2 min-h-[60px] max-h-[150px] overflow-y-auto text-lg font-normal bg-accent-foreground/10  focus:ring-2 focus:ring-accent focus:border-accent"
                      rows={2}
                       onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      form.handleSubmit(onSubmit)()
    }
  }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit button */}
          <Button
            className="bg-muted-foreground/20 hover:bg-muted-foreground/25 text-accent-foreground rounded-xl px-6 py-2 w-full sm:w-auto  self-start mt-1"
            type="submit"
            disabled={loader}
          >
            {loader ?<>
           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </> :<> 
         Submit   <ArrowDown /> </>}
          </Button>
        </form>
      </Form>
      </div>
 </>
  )
}

export default FormComponent
