export enum UserRoles {
  Admin = 'admin',
  Client = 'client',
}

export const UserRolesAsArray: UserRolesAsArrayType = Object.entries(
  UserRoles
).map((role) => ({
  name: role[0],
  value: role[1],
}));

export type UserRolesAsArrayType = { name: string; value: UserRoles }[];
