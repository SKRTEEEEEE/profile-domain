import { RoleType } from "./role.type";

type RoleBase = {
    address: string,
    permissions: RoleType,
    stripeCustomerId?: string;
    subscriptionId?: string;
    subscriptionStatus?: string;
}