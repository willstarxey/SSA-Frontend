export interface JWT {
  userData: {
    id: number,
    accessToken: string,
    expiresIn: string
  };
}
