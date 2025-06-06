export enum RoleType {
    ADMIN = 'ADMIN',
    STUDENT = 'STUDENT',
    STUDENT_PRO = "STUDENT_P",
    //Ahora en beta
    // PROF_TEST = "PROF_TEST",
    // PROF = "PROF",
    // PROF_PRO = "PROF_PRO"
  }

  export const apiRoleType = {
    enum: RoleType,
    enumName: "RoleType",
    description: "The Role permission type for a User",
    title: "Role Type",
    example: RoleType.ADMIN
  }

  export const RoleHierarchy: Record<RoleType, number> = {
  [RoleType.STUDENT]: 3,
  [RoleType.STUDENT_PRO]: 2,
  [RoleType.ADMIN]: 1,
};