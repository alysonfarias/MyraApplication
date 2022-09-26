import { Enumeration } from "./enumeration";
import { Register } from "./register";

export class User extends Register{
    name!: string;
    userName!: string;
    email!: string;
    password!: string;
    userRole!: Enumeration;
    idUserRole!: number;
  }
  