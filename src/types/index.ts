export interface UserDoc{
  id: string,
  name: string,
  email: string,
  role: string
}
export interface IUserRepository{
  getUser(id: string): Promise<UserDoc | null>,
  getUserByEmail(email: string): Promise<UserDoc | null>,
  updateUser(id: string, data: Partial<UserDoc>): Promise<UserDoc | null>,
  deleteUser(id: string): Promise<UserDoc | null>
}