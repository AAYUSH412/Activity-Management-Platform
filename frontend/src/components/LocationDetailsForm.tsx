"use client";

import React, { useState, ReactNode, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Submit from "@/components/Submit";
import { useFormStore } from "@/store/formStore";

interface FormError {
  [key: string]: string;
}

interface LocationFormData {
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  phoneNumber: string;
  contactName: string;
}

// Form Components
interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <section className="p-0">
      <header>
        <h2 className="mb-0.5 text-lg font-bold leading-6 text-zinc-800">
          {title}
        </h2>
        <p className="mb-6 text-sm leading-5 text-neutral-500">{description}</p>
      </header>
      {children}
    </section>
  );
}

interface FormInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  type?: string;
}

export function FormInput({
  label,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  error,
  className = "",
  type = "text",
}: FormInputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="mb-2 text-sm leading-5 text-zinc-800 block">
          <span>{label}</span>
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`flex items-center px-4 py-0 bg-white border ${error ? 'border-red-500' : 'border-neutral-200 hover:border-sky-950'} transition-colors h-[42px] rounded-[999px]`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full text-xs border-none text-neutral-500 outline-none"
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}

interface FormSelectProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  className?: string;
  error?: string;
}

export function FormSelect({
  label,
  placeholder,
  required = false,
  name,
  value,
  onChange,
  options,
  className = "",
  error,
}: FormSelectProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="mb-2 text-sm leading-5 text-zinc-800 block">
          <span>{label}</span>
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className={`flex relative px-4 py-0 bg-white border ${error ? 'border-red-500' : 'border-neutral-200 hover:border-sky-950'} transition-colors h-[42px] rounded-[999px]`}>
        <select
          className="w-full text-xs border-none text-neutral-500 appearance-none bg-transparent outline-none"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <path
              d="M16.6 7.45834L11.1666 12.8917C10.525 13.5333 9.47496 13.5333 8.8333 12.8917L3.39996 7.45834"
              stroke="#382D51"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}

interface PhoneInputProps {
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export function PhoneInput({ label, value, onChange, required = false, error }: PhoneInputProps) {
  return (
    <div className="mb-4 flex-1">
      {label && (
        <label className="mb-2 text-sm leading-5 text-zinc-800 block">
          <span>{label}</span>
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="flex">
        <div className="px-4 flex items-center h-[42px] border border-r-0 border-neutral-200 rounded-l-[999px] bg-white">
          <span className="text-xs text-neutral-700">+91</span>
        </div>
        <input
          type="tel"
          name="phoneNumber"
          value={value}
          onChange={onChange}
          required={required}
          placeholder="Phone number"
          className={`w-full px-4 h-[42px] border ${error ? 'border-red-500' : 'border-neutral-200'} rounded-r-[999px] text-xs outline-none hover:border-sky-950 transition-colors`}
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}

export function FormDivider() {
  return <hr className="my-6 border-t border-neutral-200" />;
}

interface ActionButtonsProps {
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export function ActionButtons({ onPrevious, onSubmit, isSubmitting }: ActionButtonsProps) {
  return (
    <div className="flex gap-2.5 mt-6">
      <button
        type="button"
        onClick={onPrevious}
        className="px-5 py-3 text-sm font-medium text-zinc-800 bg-neutral-100 border border-neutral-200 rounded-[999px] hover:bg-neutral-200 transition-colors"
      >
        Previous
      </button>
      <button
        type="submit"
        onClick={onSubmit} // Add this if the button should trigger onSubmit directly
        disabled={isSubmitting}
        className="px-5 py-3 text-sm font-bold text-white bg-sky-950 rounded-[999px] hover:bg-sky-900 transition-colors"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

const LocationDetailsForm = () => {
  const router = useRouter();
  const { activityData, setLocationData, resetForm } = useFormStore();
  
  // State for form data
  const [formData, setFormData] = useState<LocationFormData>({
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    state: "",
    phoneNumber: "",
    contactName: "",
  });

  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<FormError>({});

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user updates a field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: FormError = {};
    
    if (!formData.addressLine1.trim()) {
      newErrors.addressLine1 = "Address is required";
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.zipCode.trim())) {
      newErrors.zipCode = "Invalid PIN code format (6 digits)";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = "Invalid phone number format (10 digits)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Go back to previous form
  const handlePrevious = () => {
    router.push("/activity");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Save location data to store
      setLocationData(formData);
      
      // Get activity data and combine with location data
      const combinedData = {
        activityDetails: activityData || JSON.parse(localStorage.getItem("activityFormData") || "{}"),
        locationDetails: formData
      };
      
      // Log combined form data
      console.log("Combined Form Data:", combinedData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle success modal close
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    resetForm();
    localStorage.removeItem("activityFormData");
    
    // Reset form data
    setFormData({
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      city: "",
      state: "",
      phoneNumber: "",
      contactName: "",
    });
    
    // Navigate to home page
    router.push("/");
  };

  // List of Indian states for dropdown
  const stateOptions = [
    { value: "AP", label: "Andhra Pradesh" },
    { value: "AR", label: "Arunachal Pradesh" },
    { value: "AS", label: "Assam" },
    { value: "BR", label: "Bihar" },
    { value: "CG", label: "Chhattisgarh" },
    { value: "GA", label: "Goa" },
    { value: "GJ", label: "Gujarat" },
    { value: "HR", label: "Haryana" },
    { value: "HP", label: "Himachal Pradesh" },
    { value: "JH", label: "Jharkhand" },
    { value: "KA", label: "Karnataka" },
    { value: "KL", label: "Kerala" },
    { value: "MP", label: "Madhya Pradesh" },
    { value: "MH", label: "Maharashtra" },
    { value: "MN", label: "Manipur" },
    { value: "ML", label: "Meghalaya" },
    { value: "MZ", label: "Mizoram" },
    { value: "NL", label: "Nagaland" },
    { value: "OR", label: "Odisha" },
    { value: "PB", label: "Punjab" },
    { value: "RJ", label: "Rajasthan" },
    { value: "SK", label: "Sikkim" },
    { value: "TN", label: "Tamil Nadu" },
    { value: "TG", label: "Telangana" },
    { value: "TR", label: "Tripura" },
    { value: "UP", label: "Uttar Pradesh" },
    { value: "UK", label: "Uttarakhand" },
    { value: "WB", label: "West Bengal" },
    { value: "DL", label: "Delhi" }
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-xl w-[596px] max-sm:p-4 max-sm:w-full"
      >
        <FormSection
          title="Location Details"
          description="Please specify the address for where the activity takes place."
        >
          <FormInput
            label="Address Line 1"
            placeholder="House number and street name"
            required
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            error={errors.addressLine1}
          />
          <FormInput
            label="Address Line 2"
            placeholder="Other information, e.g., building name, landmark, etc."
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
          <FormInput
            label="PIN Code"
            placeholder="e.g., 110001"
            required
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            error={errors.zipCode}
            type="number"
          />
          <div className="flex gap-2.5 max-sm:flex-col max-sm:gap-4">
            <FormInput
              label="City"
              placeholder="Your City"
              required
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="flex-1"
              error={errors.city}
            />
            <FormSelect
              label="State"
              placeholder="Your State"
              required
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              options={stateOptions}
              className="flex-1"
              error={errors.state}
            />
          </div>
        </FormSection>

        <FormDivider />

        <FormSection
          title="Contact details"
          description="Please provide contact information for this activity."
        >
          <div className="flex gap-2.5 max-sm:flex-col max-sm:gap-4">
            <PhoneInput
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              error={errors.phoneNumber}
            />
            <FormInput
              label="Contact Name"
              placeholder="Contact Name"
              className="flex-1 mb-4 max-sm:w-full"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
            />
          </div>
        </FormSection>

        {errors.submit && (
          <div className="mt-4 text-red-500 text-sm">{errors.submit}</div>
        )}

        <ActionButtons
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </form>

      {showSuccessModal && <Submit onClose={closeSuccessModal} />}
    </>
  );
};

export default LocationDetailsForm;