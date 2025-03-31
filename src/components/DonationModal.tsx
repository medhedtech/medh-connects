
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormTermsAndCaptcha from "@/components/FormTermsAndCaptcha";
import { useToast } from "@/hooks/use-toast";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAmount: string;
  donationType: string;
}

const donationFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  amount: z.string().min(1, {
    message: "Please enter donation amount.",
  }),
  donationType: z.string(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and privacy policy" }),
  }),
});

const DonationModal = ({ isOpen, onClose, selectedAmount, donationType }: DonationModalProps) => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      amount: selectedAmount || "",
      donationType: donationType || "one-time",
    },
  });

  const onSubmit = (values: z.infer<typeof donationFormSchema>) => {
    console.log(values);
    toast({
      title: "Processing Donation",
      description: "You are being redirected to our secure payment gateway.",
    });
    
    // Here you would normally redirect to a payment gateway
    // For now, just close the modal
    setTimeout(() => {
      onClose();
      form.reset();
      setStep(1);
    }, 2000);
  };
  
  const handleAmountChange = (amount: string) => {
    form.setValue("amount", amount);
  };

  const handleTypeChange = (type: string) => {
    form.setValue("donationType", type);
  };
  
  const handleNext = () => {
    setStep(2);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Complete Your Donation</DialogTitle>
        </DialogHeader>
        
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Donation Type:</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  className={`p-2 rounded-md border ${form.getValues("donationType") === "one-time" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleTypeChange("one-time")}
                  type="button"
                >
                  One-time
                </button>
                <button 
                  className={`p-2 rounded-md border ${form.getValues("donationType") === "monthly" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleTypeChange("monthly")}
                  type="button"
                >
                  Monthly
                </button>
                <button 
                  className={`p-2 rounded-md border ${form.getValues("donationType") === "program" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleTypeChange("program")}
                  type="button"
                >
                  Program-specific
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Select Amount:</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  className={`p-2 rounded-md border ${form.getValues("amount") === "1000" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleAmountChange("1000")}
                  type="button"
                >
                  ₹1,000
                </button>
                <button 
                  className={`p-2 rounded-md border ${form.getValues("amount") === "5000" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleAmountChange("5000")}
                  type="button"
                >
                  ₹5,000
                </button>
                <button 
                  className={`p-2 rounded-md border ${form.getValues("amount") === "10000" ? "bg-primary-green text-white" : "bg-white"}`}
                  onClick={() => handleAmountChange("10000")}
                  type="button"
                >
                  ₹10,000
                </button>
              </div>
              
              <div className="mt-2">
                <input 
                  type="text" 
                  placeholder="Custom Amount" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                  onChange={(e) => handleAmountChange(e.target.value)}
                  value={form.getValues("amount") !== "1000" && form.getValues("amount") !== "5000" && form.getValues("amount") !== "10000" ? form.getValues("amount") : ""}
                />
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Donation Summary</h3>
              <div className="bg-gray-50 p-4 rounded-md mt-2">
                <div className="flex justify-between mb-2">
                  <span>Type:</span>
                  <span className="font-medium">{form.getValues("donationType") === "one-time" ? "One-time Donation" : form.getValues("donationType") === "monthly" ? "Monthly Giving" : "Program-specific Support"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">₹{form.getValues("amount")}</span>
                </div>
              </div>
            </div>
            
            <Button onClick={handleNext} className="w-full">Continue to Contact Details</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <input 
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <input 
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <input 
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
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
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Type:</span>
                  <span className="font-medium">{form.getValues("donationType") === "one-time" ? "One-time Donation" : form.getValues("donationType") === "monthly" ? "Monthly Giving" : "Program-specific Support"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">₹{form.getValues("amount")}</span>
                </div>
              </div>
              
              <FormTermsAndCaptcha control={form.control} />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="mr-2"
                >
                  Back
                </Button>
                <Button type="submit">Proceed to Payment</Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
