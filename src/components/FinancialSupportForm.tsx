
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFinancialSupportForm, SupportType } from "@/hooks/useFinancialSupportForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { BookOpen, UserRound } from "lucide-react";
import FormTermsAndCaptcha from "./FormTermsAndCaptcha";

// Education support form schema with parents details
const educationFormSchema = z.object({
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

// Upskilling form schema
const upskillingFormSchema = z.object({
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

type EducationFormValues = z.infer<typeof educationFormSchema>;
type UpskillingFormValues = z.infer<typeof upskillingFormSchema>;

export function FinancialSupportForm() {
  const { isOpen, formType, closeForm } = useFinancialSupportForm();

  // Education form
  const educationForm = useForm<EducationFormValues>({
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

  // Upskilling form
  const upskillingForm = useForm<UpskillingFormValues>({
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

  // Handle education form submission
  function onEducationSubmit(data: EducationFormValues) {
    toast.success("Education support application submitted successfully", {
      description: "We'll contact you soon about your application.",
    });
    console.log("Education form data:", data);
    closeForm();
    educationForm.reset();
  }

  // Handle upskilling form submission
  function onUpskillingSubmit(data: UpskillingFormValues) {
    toast.success("Upskilling and job assistance application submitted successfully", {
      description: "We'll contact you soon about your application.",
    });
    console.log("Upskilling form data:", data);
    closeForm();
    upskillingForm.reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeForm}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {formType === "education" ? (
              <>
                <BookOpen className="h-5 w-5 text-primary" />
                Financial Support for Education
              </>
            ) : (
              <>
                <UserRound className="h-5 w-5 text-primary" />
                Upskilling and Job Assistance for Single Mothers
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {formType === "education"
              ? "Please fill out the form below to apply for financial support for education."
              : "Please fill out the form below to apply for upskilling and job assistance."}
          </DialogDescription>
        </DialogHeader>

        {formType === "education" ? (
          <Form {...educationForm}>
            <form onSubmit={educationForm.handleSubmit(onEducationSubmit)} className="space-y-4">
              <div className="space-y-4 border border-gray-200 p-4 rounded-lg mb-4">
                <h3 className="text-md font-semibold">Student Details</h3>
                <FormField
                  control={educationForm.control}
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
                    control={educationForm.control}
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
                    control={educationForm.control}
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
                  control={educationForm.control}
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
                    control={educationForm.control}
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
                    control={educationForm.control}
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
                  control={educationForm.control}
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
                    control={educationForm.control}
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
                    control={educationForm.control}
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
                  control={educationForm.control}
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
                control={educationForm.control}
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
              <FormTermsAndCaptcha control={educationForm.control} />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeForm}>
                  Cancel
                </Button>
                <Button type="submit">Submit Application</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <Form {...upskillingForm}>
            <form onSubmit={upskillingForm.handleSubmit(onUpskillingSubmit)} className="space-y-4">
              <FormField
                control={upskillingForm.control}
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
                  control={upskillingForm.control}
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
                  control={upskillingForm.control}
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
                control={upskillingForm.control}
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
                control={upskillingForm.control}
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
                control={upskillingForm.control}
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
                control={upskillingForm.control}
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
                control={upskillingForm.control}
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
              <FormTermsAndCaptcha control={upskillingForm.control} />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeForm}>
                  Cancel
                </Button>
                <Button type="submit">Submit Application</Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
