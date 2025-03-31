
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { FormControl, FormField, FormItem } from "./ui/form";

interface FormTermsAndCaptchaProps {
  control: any;
}

const FormTermsAndCaptcha = ({ control }: FormTermsAndCaptchaProps) => {
  const [captchaValue, setCaptchaValue] = useState<string>(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const refreshCaptcha = () => {
    setCaptchaValue(generateCaptcha());
    setUserCaptcha("");
    setCaptchaError(null);
  };

  const validateCaptcha = () => {
    if (userCaptcha !== captchaValue) {
      setCaptchaError("Please enter the correct CAPTCHA code");
      return false;
    }
    setCaptchaError(null);
    return true;
  };

  return (
    <div className="space-y-4 mt-4">
      {/* CAPTCHA */}
      <div className="space-y-2">
        <Label htmlFor="captcha" className="font-medium">CAPTCHA Verification</Label>
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-3 rounded-md select-none font-mono text-lg tracking-wider font-bold">
            {captchaValue}
          </div>
          <button 
            type="button" 
            onClick={refreshCaptcha} 
            className="text-primary-green hover:text-primary-green/80"
          >
            Refresh
          </button>
        </div>
        <input 
          id="captcha"
          type="text" 
          value={userCaptcha}
          onChange={(e) => {
            setUserCaptcha(e.target.value);
            if (captchaError) setCaptchaError(null);
          }}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-green mt-2"
          placeholder="Enter the code above"
          required
        />
        {captchaError && (
          <p className="text-sm font-medium text-red-500 mt-1">{captchaError}</p>
        )}
      </div>

      {/* Terms acceptance */}
      <FormField
        control={control}
        name="termsAccepted"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <Label className="font-normal text-sm">
                I agree to the{" "}
                <Link to="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormTermsAndCaptcha;
