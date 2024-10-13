"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LuLoader2 } from "react-icons/lu"
import { toast } from "sonner"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


// Zod schema for form validation
const formSchema = z.object({
    name: z.string()
        .min(1, { message: "Name is required." })
        .min(3, { message: "Name must be at least 3 characters long." })
        .max(30, { message: "Name must be less than 30 characters." }),
    email: z.string()
        .min(1, { message: "Email is required." })
        .email({ message: "Invalid email format." }),
    phone: z.string()
        .length(10, { message: "Phone number must be exactly 10 digits." })
        .regex(/^[0-9]+$/, { message: "Phone number must be numeric." }),
    company: z.string().optional(),
    message: z.string()
        .min(1, { message: "Message is required." })
        .max(350, { message: "Message must be less than 350 characters." }),
    terms: z.boolean().refine(val => val === true, {
        message: "You must accept the terms and conditions.",
    }),
})

export default function ContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            terms: false,
        },
    })

    // Form submit handler
    async function onSubmit(values) {
        try {
            // const response = await BasicService.EnquirySave(values)
            // toast.success(response.message, { position: "top-right" })
            // form.reset()
        } catch (error) {
            const message = error?.response?.data?.message ?? error.message
            toast.error(message, { position: 'top-right' })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input className="p-[1.5rem]" placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input  className="p-[1.5rem]" placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input  className="p-[1.5rem]" placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company name</FormLabel>
                                <FormControl>
                                    <Input  className="p-[1.5rem]" placeholder="Enter your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Textarea rows="4" placeholder="Type your message here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center space-x-2">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel>
                                    I agree to the{" "}
                                    <Link href="/privacy-policy" className="text-primary underline">
                                        Terms & Conditions
                                    </Link>
                                </FormLabel>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-primary py-[1.8rem]" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? <LuLoader2 className="animate-spin" /> : "Send"}
                </Button>
            </form>
        </Form>
    )
}
