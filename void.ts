let firstname:string;
let lastname:string;
firstname='Poonguzhali';
lastname='Sivanandham';

let fullName=(a:string,b:string):void=>{
    console.log('${a},${b}');
};
fullName(firstname,lastname);