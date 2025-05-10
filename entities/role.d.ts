enum RoleType {
    ADMIN = 'ADMIN',
    STUDENT = 'STUDENT',
    STUDENT_PRO = "STUDENT_P",
    //Ahora en beta
    PROF_TEST = "PROF_TEST",
    PROF = "PROF",
    PROF_PRO = "PROF_PRO"
    // Añade aquí más tipos de roles según sea necesario
  }
type RoleBase = {
    address: string,
    permissions: RoleType,
    stripeCustomerId?: string;
    subscriptionId?: string;
    subscriptionStatus?: string;
}