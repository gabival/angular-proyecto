export interface User {
    uid?: string,
    rol?: string,
    email: string,
    displayName: string,
    photoURL?: string,
    emailverified: boolean
}
export interface authUser{
    email:string,
    password:string
}