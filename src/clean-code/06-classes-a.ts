(()=>{

type Gender = 'M'|'F';    

class Person{
    /** 
     * Forma que conozco y larga de manejar clases 
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name:string, gender:Gender, birtdate: Date){
        this.name = name;
        this.gender = gender;
        this.birthdate = birtdate;
    }
    */

    /** Forma Corta y nueva forma que voy a adquirir */
    constructor(
        public name:string,
        public gender:Gender,
        public birthdate:Date
    ){}


}

const newPerson = new Person('Fernando','M',new Date('1985-10-21'));
console.log( {newPerson} );

})();