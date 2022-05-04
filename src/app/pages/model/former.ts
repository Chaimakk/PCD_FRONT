import { Role } from "./role";

export class Former {
    userName!:string;
    userFullName!:string;
    userEmail!:string;
     userPassword!: string;
    userAddress!: string;
     userBirthday!: string;
     userGender!: string;
     userTelephoneNumber!: number;
     userPostalCode!: number;
     userCity!: string; 
     userCountry!: string;
     userLevel!:String;
     userDomain!:String;
     userExperience!:String;
     userDescription!:String;
    

    roles!:Role[];
    constructor(){}
}

