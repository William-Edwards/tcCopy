import { Role } from './roles';

export class Account {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    // company: string;
    // tier: string;
    jwtToken?: string;
}