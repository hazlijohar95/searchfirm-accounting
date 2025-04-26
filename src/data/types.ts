
export interface FirmData {
  id: string;
  firmNumber: string;
  name: string;
  address: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  website: string | null;
  latitude?: number;
  longitude?: number;
  services?: string[];
  bookmarked?: boolean;
}

export type StateOption = {
  value: string;
  label: string;
};

export type ServiceCategory = {
  value: string;
  label: string;
};

