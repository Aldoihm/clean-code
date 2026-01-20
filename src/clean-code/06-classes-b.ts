(()=>{

    type Gender = 'M'|'F'; 
    
    interface PersonProps {
        birthdate: Date;
        gender   : Gender;
        name     : string;
    }

    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name:string;

        //El constructor está recibiendo un objeto, que es la que definimos en la interface
        constructor({name, gender, birthdate}:PersonProps){
            this.name       = name;
            this.gender     =gender;
            this.birthdate  =birthdate;
        }
    }

    interface UserProps {
        birthdate: Date;
        email    : string;
        gender   : Gender;
        name     : string;
        role     : string;
    }

    class User extends Person {
        public email    : string;
        public lastAccess: Date;
        public role     : string;
        
        constructor({name, gender, birthdate,email,role}:UserProps){
            super({name,gender,birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    //UserSettings no aplicando el principio de responsabilidad única.
    
    interface UserSettingProps{
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }
    
    class UserSetting extends User{
        
        public lastOpenFolder   : string;
        public workingDirectory : string;
        
        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
            }:UserSettingProps              
        ){
            super({name,gender,birthdate,email,role});
            this.lastOpenFolder = lastOpenFolder
            this.workingDirectory = workingDirectory
        }
    }

    const userSetttings = new UserSetting({
        birthdate: new Date('1989-12-10'),
        email:'aldoihm@gmail.com',
        gender:'M',
        lastOpenFolder:'/home',
        name:'Aldo',
        role:'Admin',
        workingDirectory:'/usr/home',
    });
    console.log(userSetttings.checkCredentials());
    console.log({ userSetttings});

})();