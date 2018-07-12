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
    var cantidad = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
//PrecioLampara = 35;
///////////////////////////////////PARTE A///////////////////////////
     if(cantidad > 5){
         var precioA = cantidad * 35;
         var descuentoA = precioA * 50 / 100;
         var precioFinalA = precioA - DescuentoA;

         document.getElementById("precioDescuento").value = precioFinalA;
     }
     else{}
///////////////////////////////////PARTE B///////////////////////////
         if(cantidad == 5 && marca == "ArgentinaLuz"){
             var precioB = 5 * 35;
             var descuentoB = precioB * 40 / 100;
             var precioFinalB = precioB - descuentoB;

             document.getElementById("precioDescuento").value = precioFinalB;
         }
         
         else{
             var precioB2 = 5 * 35;
             var descuentoB2 = precioB2 * 30 / 100;
             var precioFinalB2 = precioB2 - descuentoB2;
             document.getElementById("precioDescuento").value = precioFinalB2;
         }
///////////////////////////////////PARTE C///////////////////////////
     if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
         var precioC = 4 * 35;
         var descuentoC = precioC * 25 / 100;
         var precioCFinalC = precioC - descuentoC;
         document.getElementById("precioDescuento").value = precioFinalC;
     }else{
         var descuentoC2 = precioC * 20 / 100;
         document.getElementById("precioDescuento").value = descuentoC2;
///////////////////////////////////PARTE D///////////////////////////
    if(cantidad == 3 && marca == "ArgentinaLuz"){
        var precioD = 3 * 35;
        var descuentoD = precioD * 15 / 100;
        var precioFinalD = precioD - descuentoD;
        document.getElementById("precioDescuento").value = precioFinalD;
    }else{
        if(cantidad == 3 && marca == "FelipeLamparas"){
            var precioD2 = 3 * 35;
            var descuentoD2 = precioD2 * 10 / 100;
            var precioFinalD2 = precioD2 - descuentoD2;

            document.getElementById("precioDescuento").value = precioFinalD2;
        }else{
            var precioD3 = 3 * 35;
            var descuentoD3 = precioD3 * 5 / 100;
            var precioFinalD3 = precioD3 - descuentoD3;

            document.getElementById("precioDescuento").value = precioFinalD3;
            }
    }
     }
}