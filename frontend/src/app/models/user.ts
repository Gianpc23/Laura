export class User {
    _id: string;
    email: string;
    name: string;
    password: string;
    
    constructor(_id='', email = '', name = '', password =''){
        this._id = _id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    
}