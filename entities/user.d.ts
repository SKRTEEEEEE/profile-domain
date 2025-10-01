type UserFormS = {
  nick: string | null;
  img: string | null;
  email?: string | null | undefined;
};
type UserBase = UserFormS & {
  address: string;
  roleId: string | null;
  role: RoleType | null;
  solicitud: RoleType | null;
  isVerified: boolean;
  verifyToken?: string; // esto es para veificar el email
  verifyTokenExpire?: string; // esto es para veificar el email
  paymentId?: string;
};
