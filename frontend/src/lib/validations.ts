import { z } from "zod";

export const activityFormSchema = z.object({
  activityName: z.string().min(1, "Activity name is required"),
  category: z.string().min(1, "Category is required"),
  otherCategory: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  activityType: z.string().min(1, "Activity type is required"),
  locationType: z.string().min(1, "Location type is required"),
  minMembers: z.string().optional(),
  maxMembers: z.string().optional(),
});

export const locationFormSchema = z.object({
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(1, "ZIP code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  contactName: z.string().optional(),
});
