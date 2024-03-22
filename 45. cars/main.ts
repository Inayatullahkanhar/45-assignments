interface Car {
    manufacturer: string;
    modelName: string;
     [key: string]: any;
   }
  // Write a fuction stores informations about a car
  function carInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): Car {
   let car: Car = {
         manufacturer: manufacturer,
         modelName: modelName
     };
  
    // Store additional options in the car object
     for (let option of options) {
         for (let key in option) {
              car[key] = option[key];
           }
     }  
      return car;
   }
  
  // Call the function with required information and additional options
  let myCar = carInfo('lamborghini', 'the daiblo', { color: 'grey', year: '1994' });
   console.log("returned object");
   console.log(myCar);