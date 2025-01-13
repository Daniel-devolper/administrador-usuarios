export interface UsersType {
  data: UserType[];
  limit: number;
  page: number;
  total: number;
}

export interface UserType {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
}

export interface UserDetailType {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  phone: string;
  picture: string;
  registerDate: string;
  title: string;
  updatedDate: string;
}
