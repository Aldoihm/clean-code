(()=>{

//Aplicando el principio de la responsabilidad única
//Priorizar la composición frente a la herencia (evitar los extends, osea la herencia)

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
        email    : string;
        role     : string;
    }

    class User {
        public email    : string;
        public lastAccess: Date;
        public role     : string;
        
        constructor({email,role}:UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingProps{
        
        lastOpenFolder  : string;
        workingDirectory: string;
    }
    
    class Setting{
        
        public lastOpenFolder   : string;
        public workingDirectory : string;
        
        constructor({
            lastOpenFolder,
            workingDirectory,
            }:SettingProps              
        ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingProps{
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    // Esto es la composición.
    class UserSetting {
        public person   : Person;
        public user     : User;
        public settings : Setting;

        constructor({
            name,gender,birthdate,
            role,email,
            lastOpenFolder,workingDirectory
        }:UserSettingProps){
            this.person= new Person({name,gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Setting({lastOpenFolder,workingDirectory})
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
    console.log({ userSetttings});
    console.log(userSetttings.user.checkCredentials());
})();