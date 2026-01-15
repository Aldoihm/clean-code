
type Size = ''|'S'|'M'|'XL';

class Product{    
    constructor(
        public name: string = '',
        public price: number= 0,
        public size: Size = '',    

    ){}

    isProductReady():boolean{
        // No Dry = Don't Repeat Yourself. Hacemos 3 validaciones y se está repitiendo el código
        /* Con esto inicia el ejemplo
        if(this.name.length<=0) throw Error('name is empty')
        if(this.price<=0) throw Error('price is zero')
        if(this.size.length<=0) throw Error('size is empty')
        */
        /** this, hace referencia a la clase, pero en sí es un array de propiedades de la clase, y keys, son las propiedades del constructor */
        for(const key in this){
            switch (typeof this[key]){
                case 'string':
                    if(this[key].toString().length<=0) throw Error(`${ key } is empty`)
                break;
                case 'number':
                    if(this[key].valueOf()<=0) throw Error(`${key} is zero`)
                break;
                default:
                    throw Error(`${ typeof this[key] } is not valid`)
            }
        }

        return true;
    }

    toString(){
        if (!this.isProductReady) return;

        return `${this.name} (${ this.price}), ${ this.size}`
    }
}

(()=>{
    const bluePants = new Product('Blue large pants',5,'XL');
    console.log(bluePants.toString())
})();