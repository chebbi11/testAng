
export class User{
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  role!: string;

}

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  accessToken: string;
  refreshToken:string;

}
