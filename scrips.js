/** Parpadeo de texto**/
var estado=true;
       setTimeout("ver()",500);
        function ver()
        {
        estado=!estado;
        if(estado==true)
        TEXTO1.style.visibility="visible";
        else
        TEXTO1.style.visibility="hidden";
        setTimeout("ver()",500);
        }

/** Currusel**/
var estado=true;
setTimeout("cambio()",500);
function cambio()
{
estado=!estado;
if(estado==true)
img.src="clonetactics.jpg"
else
img.src="battlefild.jpg"
setTimeout("cambio()",1000);
}

       

        /** Reloj**/
        setTimeout("reloj()",100);
        function reloj()
        {
        var tiempo=new Date();
        var hora=tiempo.getHours();
        var minuto=tiempo.getMinutes();
        var segundo=tiempo.getSeconds();
        var textohora=hora+":"+minuto+":"+segundo;
        caja.value=textohora;
        setTimeout("reloj()",500);
        }
/** caja de alerta**/
        function confirma()
        {
        var respuesta=confirm("Bienvenido al area de Ofertas, aqui encontraras los mejores precios Pulsa un botón para continuar");
        if (respuesta==true)
        alert("Ese reloj que ves es el reloj de la tienda cada juego tiene su hora de oferta pudes guiarte con el reloj");
        else
        alert("BYA");
        }
        /*AVISO DE LOGO */
         function opt()
        {
        var tabla=new Array();
        tabla[0]="Bienvenidos a";
        tabla[1]="VANGUARGAMES el lugar de los juegos";
        
        alert(tabla[0] +"\n" +tabla[1]);
        alert(tabla[1]);
        }

        /* */
        function opt(valor)
        {
        var cadena;
        switch(valor){
        case 1:
        cadena="uno";
        break;
        case 2:
        cadena="dos";
        break;
        case 3:
        cadena="tres";
        break;
        case 4: 
        cadena="cuatro";
        break;
        }
        alert("No disponible por el momento");
         }