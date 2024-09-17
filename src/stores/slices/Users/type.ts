export interface UserProps {
    uid: string;
    displayName: string | null;
    email:string | null
    photoURL:string | null
    accessToken: string;
  }

export type UserType = {
  user: UserProps
}