(()=>{

    
    type Gender = 'M'|'F';    

    class Person{
        constructor(
            public name     : string,
            public gender   : Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        
        constructor(
            name                : string,
            gender              : Gender,
            birthdate           : Date,
            public email        : string,
            public role         : string,
        ){
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    //UserSettings no aplicando el principio de responsabilidad única.
    class UserSetting extends User{
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date
        ){
            super(name,gender,birthdate,email,role);
        }
    }

    const userSetttings = new UserSetting(
        '/usr/home',
        '/home',
        'aldoihm@gmail.com',
        'Admin',
        'Aldo',
        'M',
        new Date('1989-12-10')
    );

    console.log({ userSetttings});

})();