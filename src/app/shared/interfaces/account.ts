export interface IUserLoginRequest {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  access: string;
  refresh: string;
}

export interface IPayloadJWT {
  token_type: string;
  exp: number;
  jti: string;
  user_id: number;
}

export interface ILoginResponse {
  access: string;
  refresh: string;
}
