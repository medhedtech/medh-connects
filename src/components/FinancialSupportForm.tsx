
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useFinancialSupportForm } from "@/hooks/useFinancialSupportForm";
import { BookOpen, UserRound } from "lucide-react";
import { EducationSupportForm } from "./forms/EducationSupportForm";
import { UpskillingForm } from "./forms/UpskillingForm";

export function FinancialSupportForm() {
  const { isOpen, formType, closeForm } = useFinancialSupportForm();

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
          <EducationSupportForm />
        ) : (
          <UpskillingForm />
        )}
      </DialogContent>
    </Dialog>
  );
}
