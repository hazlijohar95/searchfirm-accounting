
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
}

export type StateOption = {
  value: string;
  label: string;
};
