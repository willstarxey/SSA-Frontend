export interface JWT {
  userData: {
    id: number,
    rol: string,
    accessToken: string,
    expiresIn: string
  };
}
