export interface Festividad {
  id?: number;
  titulo: string;
  descripcion: string;
  imagen: Blob;
  fecha: Date;
  created_at?: Date;
}
