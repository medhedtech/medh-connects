
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  ArrowRight,
  FileText,
  Save,
  CheckCircle
} from "lucide-react";

// Types of financial support
const supportTypes = [
  { id: "tuition", label: "Tuition Assistance" },
  { id: "books", label: "Books and Supplies" },
  { id: "transportation", label: "Transportation" },
  { id: "other", label: "Other" },
];

// Define form schema using Zod
const formSchema = z.object({
  // Child Information
  childName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  childDob: z.string().min(1, { message: "Date of birth is required" }),
  childGender: z.enum(["male", "female", "other"], { 
    required_error: "Please select a gender" 
  }),
  childEmail: z.string().email({ message: "Invalid email address" }).optional().or(z.literal("")),
  childMobile: z.string().optional().or(z.literal("")),
  languages: z.string().min(1, { message: "Please enter at least one language" }),
  
  // Educational Details
  educationLevel: z.enum(["grade1-5", "grade6-8", "grade9-12", "undergraduate"], {
    required_error: "Please select an education level"
  }),
  schoolName: z.string().min(2, { message: "School name is required" }),
  schoolAddress: z.string().min(5, { message: "School address is required" }),
  schoolWebsite: z.string().url({ message: "Must be a valid URL" }).optional().or(z.literal("")),
  
  // Parents' Details
  isSingleMother: z.boolean().default(false),
  maritalStatus: z.enum(["single", "divorced", "separated", "married"], {
    required_error: "Please select marital status"
  }),
  
  // Mother's Details
  motherName: z.string().min(2, { message: "Mother's name is required" }),
  motherMobile: z.string().min(10, { message: "Valid mobile number is required" }),
  motherEmail: z.string().email({ message: "Invalid email address" }),
  motherAadhar: z.string().min(12, { message: "Valid 12-digit Aadhar number is required" }),
  motherPan: z.string().min(10, { message: "Valid 10-character PAN is required" }),
  
  // Father's Details (conditional)
  fatherName: z.string().min(2, { message: "Father's name is required" }).optional(),
  fatherMobile: z.string().min(10, { message: "Valid mobile number is required" }).optional(),
  fatherEmail: z.string().email({ message: "Invalid email address" }).optional(),
  fatherAadhar: z.string().min(12, { message: "Valid 12-digit Aadhar number is required" }).optional(),
  fatherPan: z.string().min(10, { message: "Valid 10-character PAN is required" }).optional(),
  
  // Family Details
  dependents: z.string().min(1, { message: "Number of dependents is required" }),
  employmentStatus: z.enum(["employed", "unemployed"], {
    required_error: "Please select employment status"
  }),
  
  // Address
  address: z.string().min(5, { message: "Address is required" }),
  landmark: z.string().optional(),
  country: z.string().min(2, { message: "Country is required" }),
  state: z.string().min(2, { message: "State is required" }),
  city: z.string().min(2, { message: "City is required" }),
  pin: z.string().min(6, { message: "Valid PIN code is required" }),
  residenceStatus: z.enum(["self-owned", "family-owned", "rent"], {
    required_error: "Please select residence status"
  }),
  rentAmount: z.string().optional(),
  
  // Financial Support
  supportTypes: z.array(z.string()).nonempty({ 
    message: "Select at least one type of support" 
  }),
  otherSupportDescription: z.string().optional(),
  requestedAmount: z.string().min(1, { message: "Requested amount is required" }),
  
  // Statement
  needStatement: z.string().min(50, { message: "Please provide at least 50 characters" }),
  futureGoals: z.string().min(50, { message: "Please provide at least 50 characters" }),
  
  // Documents - We'll handle file uploads separately
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function FinancialSupportForm() {
  const { isOpen, closeForm } = useFinancialSupportForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  
  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      childDob: "",
      childGender: "male",
      childEmail: "",
      childMobile: "",
      languages: "",
      educationLevel: "grade1-5",
      schoolName: "",
      schoolAddress: "",
      schoolWebsite: "",
      isSingleMother: false,
      maritalStatus: "married",
      motherName: "",
      motherMobile: "",
      motherEmail: "",
      motherAadhar: "",
      motherPan: "",
      fatherName: "",
      fatherMobile: "",
      fatherEmail: "",
      fatherAadhar: "",
      fatherPan: "",
      dependents: "",
      employmentStatus: "employed",
      address: "",
      landmark: "",
      country: "India",
      state: "",
      city: "",
      pin: "",
      residenceStatus: "self-owned",
      rentAmount: "",
      supportTypes: [],
      otherSupportDescription: "",
      requestedAmount: "",
      needStatement: "",
      futureGoals: "",
      agreeToTerms: false,
    },
  });
  
  const steps = [
    { id: "child-info", label: "Child Information" },
    { id: "education", label: "Education" },
    { id: "parents", label: "Parents' Details" },
    { id: "address", label: "Address" },
    { id: "financial", label: "Financial Support" },
    { id: "documents", label: "Documents" },
    { id: "review", label: "Review & Submit" },
  ];
  
  const isSingleMother = form.watch("isSingleMother");
  const residenceStatus = form.watch("residenceStatus");
  const supportTypes = form.watch("supportTypes");
  
  // Generate form content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Child Information
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="childName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter child's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="childDob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth*</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="childGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender*</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="male" id="male" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="male">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="female" id="female" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="female">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="other" id="other" />
                        </FormControl>
                        <FormLabel className="font-normal" htmlFor="other">Other</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="childEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (if available)</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="childMobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number (if available)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter mobile number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages Known*</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g. English, Hindi, Tamil" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate multiple languages with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
        
      case 1: // Educational Details
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level of Study*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="grade1-5">Grade 1-5</SelectItem>
                      <SelectItem value="grade6-8">Grade 6-8</SelectItem>
                      <SelectItem value="grade9-12">Grade 9-12</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of School/College*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter institution name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="schoolAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Address*</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter institution address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="schoolWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Website (if available)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.example.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
        
      case 2: // Parents' Details
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="isSingleMother"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pb-4 border-b">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-semibold">Is Single Mother</FormLabel>
                    <FormDescription>
                      Check this if the child is raised by a single mother
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="separated">Separated</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Mother's Details */}
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Mother's Details</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mother's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="motherMobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="motherEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email ID*</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="motherAadhar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aadhar Number*</FormLabel>
                      <FormControl>
                        <Input placeholder="12-digit Aadhar number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="motherPan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN*</FormLabel>
                      <FormControl>
                        <Input placeholder="10-character PAN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {/* Father's Details - Only show if not single mother */}
            {!isSingleMother && (
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Father's Details</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter father's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fatherMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fatherEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email ID*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fatherAadhar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhar Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="12-digit Aadhar number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="fatherPan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN*</FormLabel>
                        <FormControl>
                          <Input placeholder="10-character PAN" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Additional Family Details</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="dependents"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Dependents*</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="employmentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employment Status*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="employed">Employed</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        );
        
      case 3: // Address
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Communication/Permanent Address</h3>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address*</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter full address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="landmark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Landmark</FormLabel>
                  <FormControl>
                    <Input placeholder="Nearby landmark" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country*</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State*</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City*</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PIN Code*</FormLabel>
                    <FormControl>
                      <Input placeholder="PIN code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="residenceStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Residence Status*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select residence status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="self-owned">Self Owned</SelectItem>
                      <SelectItem value="family-owned">Family Owned</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {residenceStatus === 'rent' && (
              <FormField
                control={form.control}
                name="rentAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rent Amount*</FormLabel>
                    <FormControl>
                      <Input placeholder="Monthly rent amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        );
        
      case 4: // Financial Support
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Type of Financial Support Requested*</h3>
              <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
              
              <FormField
                control={form.control}
                name="supportTypes"
                render={() => (
                  <FormItem>
                    <div className="space-y-2">
                      {supportTypes.map((type) => (
                        <FormField
                          key={type.id}
                          control={form.control}
                          name="supportTypes"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={type.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(type.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, type.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== type.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {type.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {supportTypes.includes("other") && (
                <FormField
                  control={form.control}
                  name="otherSupportDescription"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Please describe other support needed</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the type of support you need" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            
            <FormField
              control={form.control}
              name="requestedAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requested Amount (₹)*</FormLabel>
                  <FormControl>
                    <Input placeholder="Amount in INR" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Statement of Need</h3>
              
              <FormField
                control={form.control}
                name="needStatement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Personal Statement*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Explain why you need financial support"
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Explain your current situation and why you need financial support
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="futureGoals"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Future Goals*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe how this support will help achieve your goals"
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Describe how the requested support will help achieve your future goals
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
        
      case 5: // Documents Upload
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Child Documents</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Aadhar Card (if available)</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Birth Certificate</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Passport Size Photo</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">School ID Card</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Last Fee Receipt</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Last Report Card</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Mother's Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <FormLabel className="block mb-2">Aadhar Card</FormLabel>
                  <Input type="file" className="cursor-pointer" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <FormLabel className="block mb-2">Photo</FormLabel>
                  <Input type="file" className="cursor-pointer" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <FormLabel className="block mb-2">Residence Proof</FormLabel>
                  <FormDescription className="text-xs mb-2">If address is different from Aadhar</FormDescription>
                  <Input type="file" className="cursor-pointer" />
                </div>
              </div>
            </div>
            
            {!isSingleMother && (
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Father's Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Aadhar Card</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Photo</FormLabel>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <FormLabel className="block mb-2">Residence Proof</FormLabel>
                    <FormDescription className="text-xs mb-2">If address is different from Aadhar</FormDescription>
                    <Input type="file" className="cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
            
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Income & Additional Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <FormLabel className="block mb-2">Proof of Income</FormLabel>
                  <FormDescription className="text-xs mb-2">Pay slips, tax returns, or bank statements</FormDescription>
                  <Input type="file" className="cursor-pointer" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <FormLabel className="block mb-2">References</FormLabel>
                  <FormDescription className="text-xs mb-2">Letter of recommendation (optional)</FormDescription>
                  <Input type="file" className="cursor-pointer" />
                </div>
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4 border-t">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I confirm that all information provided is accurate and complete
                    </FormLabel>
                    <FormDescription>
                      By checking this box, you agree to our terms and conditions, and consent to the verification of the information provided.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
        
      case 6: // Review & Submit
        return (
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                Please review all the information you have provided. You can go back to previous steps to make changes if needed.
              </p>
            </div>
            
            <Tabs defaultValue="child-info" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="child-info">Child & Education</TabsTrigger>
                <TabsTrigger value="family">Family & Address</TabsTrigger>
                <TabsTrigger value="financial">Financial Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="child-info" className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Child Information</h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <dt className="text-sm text-muted-foreground">Name:</dt>
                      <dd>{form.getValues("childName") || "-"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Date of Birth:</dt>
                      <dd>{form.getValues("childDob") || "-"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Gender:</dt>
                      <dd>{form.getValues("childGender") || "-"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Languages:</dt>
                      <dd>{form.getValues("languages") || "-"}</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Educational Details</h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <dt className="text-sm text-muted-foreground">Education Level:</dt>
                      <dd>{form.getValues("educationLevel")?.replace("-", " to ").toUpperCase() || "-"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">School/College:</dt>
                      <dd>{form.getValues("schoolName") || "-"}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-sm text-muted-foreground">School Address:</dt>
                      <dd>{form.getValues("schoolAddress") || "-"}</dd>
                    </div>
                  </dl>
                </div>
              </TabsContent>
              
              <TabsContent value="family" className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Parents' Details</h3>
                  <p className="text-sm mb-2">
                    {isSingleMother ? "Single Mother Household" : "Two Parent Household"}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Mother's Details</h4>
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div>
                          <dt className="text-sm text-muted-foreground">Name:</dt>
                          <dd>{form.getValues("motherName") || "-"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-muted-foreground">Contact:</dt>
                          <dd>{form.getValues("motherMobile") || "-"}</dd>
                        </div>
                      </dl>
                    </div>
                    
                    {!isSingleMother && (
                      <div>
                        <h4 className="text-sm font-medium">Father's Details</h4>
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          <div>
                            <dt className="text-sm text-muted-foreground">Name:</dt>
                            <dd>{form.getValues("fatherName") || "-"}</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-muted-foreground">Contact:</dt>
                            <dd>{form.getValues("fatherMobile") || "-"}</dd>
                          </div>
                        </dl>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Address</h3>
                  <dl className="grid grid-cols-1 gap-2">
                    <div>
                      <dt className="text-sm text-muted-foreground">Full Address:</dt>
                      <dd>{form.getValues("address") || "-"}</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <dt className="text-sm text-muted-foreground">City:</dt>
                        <dd>{form.getValues("city") || "-"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">State:</dt>
                        <dd>{form.getValues("state") || "-"}</dd>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <dt className="text-sm text-muted-foreground">PIN:</dt>
                        <dd>{form.getValues("pin") || "-"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Country:</dt>
                        <dd>{form.getValues("country") || "-"}</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </TabsContent>
              
              <TabsContent value="financial" className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Financial Support Details</h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <dt className="text-sm text-muted-foreground">Support Types:</dt>
                      <dd>
                        {form.getValues("supportTypes")?.map((type) => {
                          const supportType = supportTypes.find(t => t.id === type);
                          return supportType ? supportType.label : type;
                        }).join(", ") || "-"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Requested Amount:</dt>
                      <dd>₹{form.getValues("requestedAmount") || "-"}</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium border-b pb-2 mb-2">Statement of Need</h3>
                  <div className="space-y-3">
                    <div>
                      <dt className="text-sm text-muted-foreground">Personal Statement:</dt>
                      <dd className="whitespace-pre-line text-sm mt-1">{form.getValues("needStatement") || "-"}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Future Goals:</dt>
                      <dd className="whitespace-pre-line text-sm mt-1">{form.getValues("futureGoals") || "-"}</dd>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );
        
      default:
        return null;
    }
  };

  const handleSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    
    // Show confirmation dialog
    setShowSubmitDialog(true);
  };
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Financial Support Application
            </DialogTitle>
            <DialogDescription>
              Please fill out this form to apply for financial support from Medh Foundation.
            </DialogDescription>
          </DialogHeader>
          
          {/* Form Steps */}
          <div className="relative mb-8">
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />
            
            <div className="relative z-10 flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="flex flex-col items-center" 
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 font-medium text-sm
                      ${currentStep === index 
                        ? "bg-primary text-white" 
                        : currentStep > index 
                          ? "bg-primary/80 text-white" 
                          : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs text-muted-foreground hidden md:block">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {renderStepContent()}
              
              <div className="flex justify-between mt-6 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={nextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">
                    Submit Application <Save className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Submission confirmation dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center text-primary gap-2">
              <CheckCircle className="h-5 w-5" />
              Application Submitted Successfully
            </AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for submitting your application for financial support. Our team will review your application and contact you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={closeForm}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
