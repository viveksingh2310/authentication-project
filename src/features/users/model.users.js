export class User{
    constructor(id,name,email,pass){
        this.id=id;
        this.name=name;
        this.email=email;
        this.pass=pass;
    }
   static users=[
        new User(1,'Vivek Singh','viveksingh14538@gmail.com','Vivek123@'),
        new User(2,'Deepak Rana','deepakrksh@gmail.com','DeepakRksh123@'),
        new User(3,'Anshika Chauhan','anshikaa23@gmail.com','Anshika1234@')
    ]
    static addUser(body){
        const{id,name,email,pass}=body;
        const newUser=new User(id,name,email,pass);
        User.users.push(newUser);
        return User.users;
     }
    static getAll(){
        return User.users;   
    }
    static delete(body){
        const {id}=body;
       const res=User.users.filter((u)=>u.id!=id);
        return res;//the new user created would be returned from here

    }


}