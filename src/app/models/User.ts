import {Roles } from "./Roles"
import {Groups } from "./Groups"
export class User {
    ID:number;
    username:string;
    firstName:string;
    lastName: string;
    isActive:boolean;
    roles:Array<any>
    groups:Array<any>
}