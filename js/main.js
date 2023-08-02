const precioBaseToroElite = 1000000;
const precioBaseToroCom = 750000;
const ofertas = [];
const lote002Ofertas = [];
const lote003Ofertas = [];

class Reproductor {
  constructor(rp, raza, fechaNac, peso, precioBase, saleBids) {
    this.rp = rp;
    this.raza = raza;
    this.fechaNac = fechaNac;
    this.peso = peso;
    this.precioBase = precioBase;
    this.saleBids = saleBids;
  }
}

const lote001 = new Reproductor(
  "8359",
  "Braford",
  "15/07/21",
  870,
  precioBaseToroElite
);

const lote002 = new Reproductor(
  "23459S",
  "Braford",
  "15/07/21",
  750,
  precioBaseToroCom
);

const lote003 = new Reproductor(
  "8029",
  "Braford",
  "15/07/21",
  750,
  precioBaseToroCom
);

console.log(lote001);
console.log(lote002);
console.log(lote003);


/********Start Bidder Logging***********/
// function bidder(nombre, apellido, mobile, mail, dni) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.mobile = mobile;
//   this.mail = mail;
//   this.dni = dni;

//   this.showDetails = function () {
//     console.log(
//       "Bienvenido " +
//         this.nombre +
//         " " +
//         this.apellido +
//         ". Tu mail es " +
//         this.mail +
//         ". Tu celular es " +
//         this.mobile +
//         ". Tu documento es " +
//         this.dni +
//         "."
//     );
//   };

//   this.saveUser = function () {
//     localStorage.setItem("nombre", this.nombre)
//     localStorage.setItem("apellido", this.apellido)
//     localStorage.setItem("mail", this.mail)
//     localStorage.setItem("mobile", this.mobile)
//     localStorage.setItem("dni", this.dni)
//   };
// }


// const bidder1 = new bidder(
//   prompt("Ingrese su nombre"),
//   prompt("Ingrese su apellido"),
//   prompt("Ingrese su celular"),
//   prompt("Ingrese su mail"),
//   prompt("Ingrese su dni sin puntos ni comas")
// );


// bidder1.showDetails();
// bidder1.saveUser();

/********End Bidder Logging***********/

// function placeBid (lote, monto) {
//   numeroOferta = 0;
//   while (monto <= precioBaseToroElite) { monto = prompt("Ingrese su oferta para el", lote)};
//   fecha = Date();
//   console.log("Datos de la oferta", numeroOferta, fecha, monto, lote)

//   numeroOferta++;

//   console.log(numeroOferta)

// }

//placeBid("lote1", 1000000);

const button1 = document.getElementById("button1");

button1.addEventListener("click", function onClick() {
    const curColour = button1.style.backgroundColor;

    if (curColour === 'red') {
      button1.style.backgroundColor = "blue";
    }
    else {
      button1.style.backgroundColor = "red";
    }
});
let numeroOferta = 0;
// try if montoNuevo is nonexistent do one thing and if it exists do another.
button1.addEventListener("click", function placeBid (lote, monto) {
  var montoNuevo;
  console.log(montoNuevo)
  while ((monto <= precioBaseToroElite || monto == undefined) || (monto <= montoNuevo && monto !== undefined)  ) { monto = prompt("Ingrese su oferta para el  lote 1")};
  fecha = Date();
  monto = montoNuevo;
  console.log("Datos de la oferta", numeroOferta, fecha, monto, lote)

  numeroOferta++;

  console.log(numeroOferta)

});


// function saleBid(lote, offerNumber, monto, fechaHora) {
//   this.lote = lote;
//   this.offerNumber = offerNumber;
//   this.fechaHora = fechaHora;
//   this.monto = monto;

//   this.showBid = function () {
//     console.log(
//       "Tu oferta por el lote " +
//         this.lote +
//         " es " +
//         this.monto +
//         ". Es la oferta Nro: " +
//         this.offerNumber
//     );
//   };
// }






// let ofertaNum = 1;

// for (i = 1; i <= 3; i++) {
//   let arrayNew = [
//     ofertaNum,
//     Date(),
//     i,
//     parseInt(prompt("Ingresa tu oferta para el lote" + i)),
//   ];
//   console.log(arrayNew);

//   while (arrayNew < precioBaseToroCom) {
//     let arrayNew = [
//       ofertaNum,
//       Date(),
//       i,
//       parseInt(
//         prompt(
//           "Ingresa tu oferta para el lote" +
//             i +
//             "mayor al precio base de " +
//             precioBaseToroCom
//         )
//       ),
//     ];  
//   }
//   console.log("ArrayNew", arrayNew);
//   console.log("OfertaNum", ofertaNum);

//   ofertas.push(arrayNew);
//   // console.log(ofertas);
//   ofertaNum++;
// }




// for (let offerNumber = 1; offerNumber <= 3; offerNumber++) {
//   let dyV = eval(`v${i}`);
//   console.log("bid00" + offerNumber);
//   console.log(dyV);
//    dyV = new saleBid (
//     "lote00" + prompt("Ingrese el lote a ofertar por."),
//     offerNumber,
//     Date(),
//     prompt("Ingrese el monto")
//   );
//   dyV.showBid();
// }

// let offerNumber = 1;
//
// const bid1 = new saleBid(
//   "lote00" + prompt("Ingrese el lote a ofertar: 1, 2 ó 3."),
//   offerNumber,
//   Date(),
//   prompt("Ingrese el monto"),
//   offerNumber++
// );

// const bid2 = new saleBid(
//   "lote00" + prompt("Ingrese el lote a ofertar: 1, 2 ó 3."),
//   offerNumber,
//   Date(),
//   prompt("Ingrese el monto"),
//   offerNumber++
// );

// bid1.showBid();
// bid2.showBid();

// crearUsuario();
// console.log(usuarioActual);

// if (prompt(usuarioActual.nombre + ", ¿quiere hacer una preoferta en lote 1 - si o no?") === "si"
// ) { case (animals[animals.length - 1] >= precioBaseToroElite)
//     {
//   lote1Ofertas.push(prompt("Ingrese el monto. Debe ser igual o mayor a " + precioBaseToroElite));
// } else if (
//   prompt(
//     "Qué lástima. Se lo pierde. ¿Y quiere hacer una preoferta en lote 2 - si o no?"
//   ) === "si"
// ) {
//   lote2Ofertas.push(
//     prompt("Ingrese el monto. Debe ser igual o mayor a " + precioBaseToroCom)
//   );
// }

// console.log(lote1);
// console.log(lote2);
