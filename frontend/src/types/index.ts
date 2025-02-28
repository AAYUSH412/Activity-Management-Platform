interface TabItem {
    name: string;
    icon: string;
  }
  
  interface FormSectionBase {
    title: string;
    description: string;
  }

interface ActivityFormData {
  activityName: string;
  category: string;
  otherCategory: string;
  activityDescription: string;
  activityType: string;
  locationType: string;
  minMembers: string;
  maxMembers: string;
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

interface FormStore {
  activityData: ActivityFormData | null;
  locationData: LocationFormData | null;
  setActivityData: (data: ActivityFormData) => void;
  setLocationData: (data: LocationFormData) => void;
  resetForm: () => void;
}

interface FormProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

interface SelectOption {
  value: string;
  label: string;
}

export type { 
  TabItem, 
  FormSectionBase, 
  ActivityFormData, 
  LocationFormData,
  FormStore,
  FormProps,
  SelectOption 
};