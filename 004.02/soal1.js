class Sepeda{
    constructor(Jarijari) {
        this.Jarijari = Jarijari;
    }
    diameter(){
    return this.Jarijari * 2;
    }
}

const Sepeda1 = new Sepeda(30);
console.log("Diameter sepeda 1:", Sepeda1.diameter(), "cm");