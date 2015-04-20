$( document ).ready(function() {	
   
   var cobre=0;
   var cobretotal=0;
   var oxigeno=0;
   var oxigenototal=0;
   var barras=0;
   var barras_inventario=0;
   var producidas=0;
   var en_espera=0;
   var aux=0;
   var maquinaria=false;
   var maquinas = ["0","0","0","0","0"];
//----------Opciones--------------//
   $("#maquinaria").click(function(){

   	if( $(this).hasClass("waves-effect waves-light btn  amber darken-3 segundo") ){
        $(this).attr({'class': 'waves-effect waves-light btn  amber black segundo'});
        $(this).html('<i class="mdi-toggle-radio-button-off left"></i>DETENER MAQUINARIA');
        $maquinaria=true;
        var respuesta = reloj();
    }
    else{
        	$(this).attr({'class': 'waves-effect waves-light btn  amber darken-3 segundo'});
        	$(this).html('<i class="mdi-toggle-radio-button-on left"></i>INICIAR MAQUINARIA');
          $maquinaria=false;
    }
   });
//----------Control de Datos con Inventario--------------//
   $("#cobremas").click(function(){
   		cobre++;
   		$("#cobre").html(cobre);
   });
   $("#cobremenos").click(function(){
   		if(cobre>0){
	   		cobre--;
	   		$("#cobre").html(cobre);
   		}
   });

   $("#oxigenomas").click(function(){
   		oxigeno+=201;
   		$("#oxigeno").html(oxigeno);
   });
   $("#oxigenomenos").click(function(){
   		if(oxigeno>0){
	   		oxigeno-=201;
	   		$("#oxigeno").html(oxigeno);
   		}
   });

   $("#barrasmas").click(function(){
   		barras++;
   		$("#barras").html(barras);
   });
   $("#barrasmenos").click(function(){
   		if(barras>0){
	   		barras--;
	   		$("#barras").html(barras);
   		}
   });

   $("#cargar").click(function(){

      oxigenototal+=oxigeno;
      cobretotal +=cobre;
      en_espera +=barras;
      oxigeno = oxigenototal/201;
      if(oxigeno<=cobretotal && oxigeno>0){
        aux=oxigeno*6;
        oxigenototal-=oxigeno*201;
        cobretotal-=oxigeno;
      }
      else if(oxigeno>cobretotal && cobretotal>0){
        aux=cobre*6;
        oxigenototal-=cobre*201;
        cobretotal-=cobre;
      }
      barras_inventario+=aux;      
      aux=0;
      oxigeno=0;
      cobre=0;
      barras=0;     
      $("#cobre").html(cobre);
      $("#oxigeno").html(oxigeno);
      $("#barras").html(barras);
      $("#oxigenototal").html(oxigenototal);
      $("#cobretotal").html(cobretotal);
      $("#en_espera").html(en_espera+" en espera");
      $("#barras_inventario").html(barras_inventario);       
   });

//----------Encendido de los LED--------------//
var n=0;
    function reloj(){
      if($maquinaria && barras_inventario>0 && en_espera>0)
      {
        if(n==0)
          $("#1").attr({'class': 'btn btn-tiny fases red accent-3'});

        if(n==5){
          $("#1").attr({'class': 'btn btn-tiny fases indigo accent-3'});
          $("#2").attr({'class': 'btn btn-tiny fases red accent-3'});
        }
        if(n==10){
          $("#2").attr({'class': 'btn btn-tiny fases indigo accent-3'});
          $("#3").attr({'class': 'btn btn-tiny fases red accent-3'});
        }
        if(n==15){
          $("#3").attr({'class': 'btn btn-tiny fases indigo accent-3'});
          $("#4").attr({'class': 'btn btn-tiny fases red accent-3'});
        }
        if(n==20){
          $("#4").attr({'class': 'btn btn-tiny fases indigo accent-3'});
          $("#5").attr({'class': 'btn btn-tiny fases red accent-3'});
        }
        if(n==25){
          $("#5").attr({'class': 'btn btn-tiny fases indigo accent-3'});
          n=-1;
          producidas++;
          barras_inventario-=1;
          en_espera-=1;
          $("#barras_inventario").html(barras_inventario);
          $("#producidas").html(producidas+" BARRAS");
          $("#en_espera").html(en_espera+" EN ESPERA");
        }
        n++;
      }
        setTimeout(function(){
            reloj();
        }, 500);
    }   
});