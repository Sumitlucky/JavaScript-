const student = {
    name : "sumit",
    age : 25,
    math : 90,
    eng : 90,
    sci : 98,
    sst : 100,
    hindi : 78,
    getAvg() {
        let avg = (this.math + this.eng + this.sci + this.sst + this.hindi) / 5;
        // console.log("sumit got avg marks is :",avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}


function getAvg() {
    console.log(this);
} 