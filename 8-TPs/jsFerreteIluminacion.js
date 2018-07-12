/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio = 35;
    var cantidad = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
    var precioDesc;

     if(cantidad > 5){
         precioDesc = (cantidad * precio) * 0.5;

     }else if(cantidad == 5 && marca == "ArgentinaLuz"){
         precioDesc = (cantidad * precio) * 0.6;

     }else if(cantidad == 5){
         precioDesc = (precio * cantidad) * 0,7

     }else if(cantidad == 4 && (marca == "FelipeLamparas" || marca == "ArgentinaLuz")){
         precioDesc = (cantidad * precio) * 0,75;
     }else if (cantidad == 4){
         precioDesc = (cantidad * precio) * 0.8;
     }else if(cantidad == 3){
         if(marca == "ArgentinaLuz"){
             precioDesc = (cantidad * precio) * 0,85;
         }if(marca == "FelipeLamparas"){
             precioDesc = (cantidad * precio) * 0.4;
         }else{
             precioDesc = (cantidad * precio) * 0.95;
         }
     }
     if(precioDesc > 120){
         precioDesc = precioDesc * 1.1;
     }
}