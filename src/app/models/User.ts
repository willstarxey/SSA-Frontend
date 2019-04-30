export interface User {
  id?: number;
  nombre: string;
  app: string;
  apm: string;
  direccion: string;
  rol: string;
  password: string;
  puesto: string;
  fotografia?: Blob;
  created_at?: Date;
}
