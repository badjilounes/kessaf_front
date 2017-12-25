export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  password: string;
  picture?: string;
  contacts: number[];
}
