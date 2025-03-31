
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import FormTermsAndCaptcha from "./FormTermsAndCaptcha";
import { useToast } from "@/hooks/use-toast";

interface CSRConsultationFormProps {
  onClose: () => void;
}

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  contactPerson: z.string().min(2, {
    message: "Contact person name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  interestArea: z.string().min(1, {
    message: "Please select an area of interest.",
  }),
  message: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and privacy policy" }),
  }),
});

export default function CSRConsultationForm({ onClose }: CSRConsultationFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      interestArea: "",
      message: "",
      termsAccepted: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Consultation Request Submitted",
      description: "We'll contact you shortly to schedule your CSR consultation.",
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold">Schedule a CSR Consultation</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Complete the form below and our team will contact you to discuss CSR partnership opportunities that align with your organization's values and objectives.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <input
                          type="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          {...field}
                        />
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
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="interestArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area of Interest</FormLabel>
                    <FormControl>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        {...field}
                      >
                        <option value="">Select an option</option>
                        <option value="financial">Financial Support</option>
                        <option value="strategic">Strategic Partnership</option>
                        <option value="employee">Employee Engagement</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green min-h-[100px]"
                        placeholder="Tell us about your CSR goals and interests"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormTermsAndCaptcha control={form.control} />
              
              <Button 
                type="submit" 
                className="w-full bg-primary-green text-white font-medium py-5 mt-6"
              >
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
