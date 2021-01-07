export type Role = 'admin' | 'manager' | 'user';

export class User {
  displayName: string;
  email: string;
  role: Role;
  uid: string;
}
