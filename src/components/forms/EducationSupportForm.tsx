
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
import FormTermsAndCaptcha from "@/components/FormTermsAndCaptcha";
import { DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";

// Education support form schema with parents details
export const educationFormSchema = z.object({
  // Student details
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  schoolName: z.string().min(2, { message: "School name must be at least 2 characters" }),
  grade: z.string().min(1, { message: "Please select a grade" }),
  supportNeeded: z.string().min(10, { message: "Please describe the support needed" }),
  
  // Parent details
  parentName: z.string().min(2, { message: "Parent's name must be at least 2 characters" }),
  parentEmail: z.string().email({ message: "Please enter a valid email address" }),
  parentPhone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  relationship: z.string().min(1, { message: "Please specify the relationship" }),
  
  // Terms acceptance
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
});

export type EducationFormValues = z.infer<typeof educationFormSchema>;

export function EducationSupportForm() {
  const { closeForm } = useFinancialSupportForm();

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      schoolName: "",
      grade: "",
      supportNeeded: "",
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      relationship: "",
      termsAccepted: false,
    },
  });

  // Handle education form submission
  function onSubmit(data: EducationFormValues) {
    toast.success("Education support application submitted successfully", {
      description: "We'll contact you soon about your application.",
    });
    console.log("Education form data:", data);
    closeForm();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4 border border-gray-200 p-4 rounded-lg mb-4">
          <h3 className="text-md font-semibold">Student Details</h3>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter student's full name" {...field} />
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
                    <Input type="email" placeholder="Enter email" {...field} />
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
                    <Input placeholder="Enter phone number" {...field} />
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
                  <Textarea placeholder="Enter address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter school name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade/Class</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter grade or class" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4 border border-gray-200 p-4 rounded-lg mb-4">
          <h3 className="text-md font-semibold">Parent/Guardian Details</h3>
          <FormField
            control={form.control}
            name="parentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent/Guardian Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter parent's full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="parentEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter parent's email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parentPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter parent's phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="relationship"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relationship to Student</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. Mother, Father, Guardian" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="supportNeeded"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Support Needed</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe what kind of support you need"
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
