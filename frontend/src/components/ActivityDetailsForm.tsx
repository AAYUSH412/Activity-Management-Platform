"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/formStore";


// Define initial form state
const initialFormState = {
  activityName: "",
  category: "",
  otherCategory: "",
  activityDescription: "",
  activityType: "",
  locationType: "",
  minMembers: "",
  maxMembers: ""
};

const ActivityDetailsForm = () => {
  const router = useRouter();
  const { setActivityData, activityData } = useFormStore();
  
  // Load form data from store or localStorage
  const [formData, setFormData] = useState(() => {
    if (activityData) return activityData;
    
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("activityFormData");
      return savedData ? JSON.parse(savedData) : initialFormState;
    }
    return initialFormState;
  });

  const [errors, setErrors] = useState({});

  const {
    activityName,
    category,
    otherCategory,
    activityDescription,
    activityType,
    locationType,
    minMembers,
    maxMembers
  } = formData;

  useEffect(() => {
    localStorage.setItem("activityFormData", JSON.stringify(formData));
  }, [formData]);

  // Update form data
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user updates a field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.activityName.trim()) {
      newErrors.activityName = "Activity name is required";
    }
    
    if (!formData.category) {
      newErrors.category = "Category is required";
    }
    
    if (formData.category === "other" && !formData.otherCategory.trim()) {
      newErrors.otherCategory = "Please specify the category";
    }
    
    if (!formData.activityDescription.trim()) {
      newErrors.activityDescription = "Activity description is required";
    }
    
    if (!formData.activityType) {
      newErrors.activityType = "Activity type is required";
    }
    
    if (!formData.locationType) {
      newErrors.locationType = "Location type is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setActivityData(formData);
    
    router.push("/location");
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="p-6 bg-white rounded-xl w-[596px] max-md:p-5 max-md:w-full max-sm:p-4">
        <header className="mb-6 text-lg font-bold leading-7 text-zinc-800">
          Activity Details
        </header>

        {/* Activity Name Field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            <span>Activity Name</span>
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex items-center px-4 py-0 mt-2 w-full bg-white border border-neutral-200 hover:border-sky-950 transition-colors h-[42px] rounded-[999px]">
            <input
              type="text"
              placeholder="Eg: Cooking class in Palo Alto"
              className="w-full text-xs border-none text-neutral-500 outline-none"
              value={activityName}
              onChange={(e) => updateFormData("activityName", e.target.value)}
            />
          </div>
          {errors.activityName && <span className="text-red-500 text-xs">{errors.activityName}</span>}
        </div>

        {/* Category Section */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            <span>Select the best category to describe your activity</span>
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex flex-col mt-2">
            {['adventure', 'creative', 'food', 'learning', 'sports', 'volunteering', 'other'].map(cat => (
              <div key={cat} className="flex gap-2.5 items-center mb-3">
                <input
                  type="radio"
                  id={cat}
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => updateFormData("category", cat)}
                  className="m-0 rounded-full border-2 border-solid appearance-none cursor-pointer border-neutral-200 h-[18px] w-[18px] checked:bg-gray-800 checked:border-gray-800"
                />
                <label htmlFor={cat} className="text-sm leading-5 text-zinc-800 cursor-pointer">
                  {cat === 'adventure' ? 'Adventure & Games' : 
                   cat === 'creative' ? 'Creative Expression' : 
                   cat === 'food' ? 'Food & Drink' : 
                   cat === 'learning' ? 'Learning & Development' : 
                   cat === 'sports' ? 'Sports and Fitness' : 
                   cat === 'volunteering' ? 'Volunteering' : 'Other'}
                </label>
              </div>
            ))}
            {category === "other" && (
              <div className="flex items-center px-4 py-0 mt-2 w-full bg-white border border-neutral-200 hover:border-sky-950 transition-colors h-[42px] rounded-[999px]">
                <input
                  type="text"
                  placeholder="Specify the category"
                  className="w-full text-xs border-none text-neutral-500 outline-none"
                  value={otherCategory}
                  onChange={(e) => updateFormData("otherCategory", e.target.value)}
                />
              </div>
            )}
          </div>
          {errors.category && <span className="text-red-500 text-xs">{errors.category}</span>}
          {errors.otherCategory && <span className="text-red-500 text-xs">{errors.otherCategory}</span>}
        </div>

        {/* Activity Description */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            <span>About the Activity</span>
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="p-4 mt-2 w-full bg-white rounded-xl border border-neutral-200 hover:border-sky-950 transition-colors">
            <textarea
              placeholder="Activity Description"
              className="w-full h-24 text-xs resize-none border-none text-neutral-500 outline-none"
              value={activityDescription}
              onChange={(e) => updateFormData("activityDescription", e.target.value)}
            />
          </div>
          {errors.activityDescription && <span className="text-red-500 text-xs">{errors.activityDescription}</span>}
        </div>

        {/* Activity Type */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            <span>Please select the activity type</span>
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex flex-col mt-2">
            {['indoor', 'outdoor', 'virtual'].map(type => (
              <div key={type} className="flex gap-2.5 items-center mb-3">
                <input
                  type="radio"
                  id={type}
                  name="activityType"
                  value={type}
                  checked={activityType === type}
                  onChange={() => updateFormData("activityType", type)}
                  className="m-0 rounded-full border-2 border-solid appearance-none cursor-pointer border-neutral-200 h-[18px] w-[18px] checked:bg-gray-800 checked:border-gray-800"
                />
                <label htmlFor={type} className="text-sm leading-5 text-zinc-800 cursor-pointer">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.activityType && <span className="text-red-500 text-xs">{errors.activityType}</span>}
        </div>

        {/* Location Type */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            <span>Please select the type of location</span>
            <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex flex-col mt-2">
            {[
              { id: 'provider', label: 'Provider Location' },
              { id: 'user', label: 'User Location' }
            ].map(option => (
              <div key={option.id} className="flex gap-2.5 items-center mb-3">
                <input
                  type="radio"
                  id={option.id}
                  name="locationType"
                  value={option.id}
                  checked={locationType === option.id}
                  onChange={() => updateFormData("locationType", option.id)}
                  className="m-0 rounded-full border-2 border-solid appearance-none cursor-pointer border-neutral-200 h-[18px] w-[18px] checked:bg-gray-800 checked:border-gray-800"
                />
                <label htmlFor={option.id} className="text-sm leading-5 text-zinc-800 cursor-pointer">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {errors.locationType && <span className="text-red-500 text-xs">{errors.locationType}</span>}
        </div>

        {/* Members Section */}
        <div className="mb-6">
          <label className="block mb-2 text-sm leading-5 text-zinc-800">
            How many members can take part in the activity?
          </label>
          <div className="flex gap-4 mt-2 max-sm:flex-col max-sm:gap-3">
            <div className="flex items-center flex-1 px-4 py-0 bg-white border border-neutral-200 hover:border-sky-950 transition-colors h-[42px] rounded-[999px]">
              <input
                type="number"
                placeholder="Minimum Members"
                className="w-full text-xs border-none text-neutral-500 outline-none"
                value={minMembers}
                onChange={(e) => updateFormData("minMembers", e.target.value)}
              />
            </div>
            <div className="flex items-center flex-1 px-4 py-0 bg-white border border-neutral-200 hover:border-sky-950 transition-colors h-[42px] rounded-[999px]">
              <input
                type="number"
                placeholder="Maximum Members"
                className="w-full text-xs border-none text-neutral-500 outline-none"
                value={maxMembers}
                onChange={(e) => updateFormData("maxMembers", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="px-5 py-3 h-11 text-sm font-bold leading-5 text-white cursor-pointer bg-sky-950 hover:bg-sky-900 transition-colors border-none rounded-[999px] w-[169px] max-sm:w-full"
          >
            Save and Continue
          </button>
        </div>
      </section>
    </form>
  );
};

export default ActivityDetailsForm;