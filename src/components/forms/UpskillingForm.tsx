
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormTermsAndCaptcha from "@/components/FormTermsAndCaptcha";
import { DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";

// Upskilling form schema
export const upskillingFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  currentSkills: z.string().min(5, { message: "Please describe your current skills" }),
  desiredSkills: z.string().min(5, { message: "Please describe your desired skills" }),
  employmentStatus: z.enum(["unemployed", "part-time", "full-time"]),
  childrenDetails: z.string().min(5, { message: "Please provide details about your children" }),
  
  // Terms acceptance
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
});

export type UpskillingFormValues = z.infer<typeof upskillingFormSchema>;

export function UpskillingForm() {
  const { closeForm } = useFinancialSupportForm();

  const form = useForm<UpskillingFormValues>({
    resolver: zodResolver(upskillingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      currentSkills: "",
      desiredSkills: "",
      employmentStatus: "unemployed",
      childrenDetails: "",
      termsAccepted: false,
    },
  });

  // Handle upskilling form submission
  function onSubmit(data: UpskillingFormValues) {
    toast.success("Upskilling and job assistance application submitted successfully", {
      description: "We'll contact you soon about your application.",
    });
    console.log("Upskilling form data:", data);
    closeForm();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentSkills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Skills</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your current skills and experience"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desiredSkills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired Skills</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What skills would you like to learn?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentStatus"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Current Employment Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="unemployed" />
                    </FormControl>
                    <FormLabel className="font-normal">Unemployed</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="part-time" />
                    </FormControl>
                    <FormLabel className="font-normal">Part-time employed</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="full-time" />
                    </FormControl>
                    <FormLabel className="font-normal">Full-time employed</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="childrenDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Children Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide details about your children (ages, education status, etc.)"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Terms and CAPTCHA */}
        <FormTermsAndCaptcha control={form.control} />
        
        <DialogFooter>
          <Button type="button" variant="outline" onClick={closeForm}>
            Cancel
          </Button>
          <Button type="submit">Submit Application</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
