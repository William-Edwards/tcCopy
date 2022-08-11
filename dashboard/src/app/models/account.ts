import { Role } from './roles';
import { Tier } from './tiers';

export class Account {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    company: string;
    tier: Tier;
    jwtToken?: string;
}