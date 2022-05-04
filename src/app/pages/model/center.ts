import { Role } from "./role";

export class Center {
    userName!:string;
  
    centerName!: string;
    centerDirectorName!: string;
    userPassword!: string;
    userEmail!: string;
    userAddress!: string;
    userTelephoneNumber!: number;
    userPostalCode!: number;
    userCity!: string; 
    userCountry!: string;
    userDescription!:String;

    roles!:Role[];
    constructor(){}
}
