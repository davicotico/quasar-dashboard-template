export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export type Contact = {
  id: string;
  phone: string;
  mail: string;
  fotoUrl: string;
  displayName: string;
  jobTitle: string;
  office: string;
};
