$(document).ready(function(){
	var url="http://unitecusa.com.co/temperaturas/sistema_2.0_api/auth.php?callback=?";
	
  //visitantes function
  $("#visitantes").click(function(){
		
		var cedula=$("#cedula").val();
    	var nombre_completo=$("#nombre_completo").val();
		var telefono=$("#telefono").val();
		var empresa=$("#empresa").val();
		var tipo_de_visita=$("#tipo_de_visita").val();
		var contacto_unitec=$("#contacto_unitec").val();
		var temperatura=$("#temperatura").val();

    	var dataString="cedula="+cedula+"&nombre_completo="+nombre_completo+"&telefono="+telefono+"&empresa="+empresa+"&tipo_de_visita="+tipo_de_visita+"&contacto_unitec="+contacto_unitec+"&temperatura="+temperatura+"&visitante=";

    	if($.trim(cedula).length>0 & $.trim(nombre_completo).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#visitantes").val('Conectando...');},
				success: function(data){
					if(data=="success")
					{
						alert("Se ha enviado tu registro al servidor");
						//window.parent.$('#CatModal').modal('show');
						window.parent.$("#myModal").modal('show');
						setTimeout(function() {
                        window.parent.$('#myModal').modal('hide');
                        window.location.href = "index.html";
                        }, 3000);
					}
					else if(data=="failed")
					{
						alert("Error"+data);
					}else{
						alert("Error"+data);
					}
				}
			});
		}return false;
    });
    
    //Login Function
    $("#login").click(function(){
    	
    	var email=$("#email").val();
    	var password=$("#password").val();
    	var dataString="email="+email+"&password="+password+"&login=";
    	if($.trim(email).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#login").html('Conectando...');},
				success: function(data){
					
				var res = data.substring(0, 7);
				var res2 = data.substring(0, 6);
				
					if(res=="success")
					{
						localStorage.login="true";
						localStorage.email=email;
						
						var fullname = data.split("=");
						localStorage.fullname= fullname[1];
						
				        var d = new Date();
                        d.setTime(d.getTime() + (365*24*60*60*1000));
                        var expires = "expires="+ d.toUTCString();
                        document.cookie = 'fullname' + "=" + fullname[1] + ";" + expires + ";path=/";		
						
						window.location.href = "index.html";
					}
					else if(res2="failed")
					{
						alert("Login error");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

    //signup function
    $("#signup").click(function(){
    	var fullname=$("#fullname").val();
    	var email=$("#email").val();
    	var password=$("#password").val();
    	var dataString="fullname="+fullname+"&email="+email+"&password="+password+"&signup=";

    	if($.trim(fullname).length>0 & $.trim(email).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#signup").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Gracias por registrarte, ingresa en el menu ENTRAR");
						window.location.href = "login.html";
					}
					else if(data="exist")
					{
						alert("Gracias por registrarte, ingresa en el menu ENTRAR");
						window.location.href = "login.html";
					}
					else if(data="failed")
					{
						alert("error");
					}
				}
			});
		}return false;

    });
	
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}	
	
    //lavadora function
    $("#lavadora").click(function(){
		var cod_apk_cliente = makeid(10);
		
  var d = new Date();
  d.setTime(d.getTime() + (2*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = 'mapa' + "=" + cod_apk_cliente + ";" + expires + ";path=/";
		
    	var nombre=$("#nombre").val();
		var telefono=$("#telefono").val();
		var celular=$("#celular").val();
		//var direccion=$("#direccion").val();
		var direccion=$("#dir1").val()+" "+$("#dir2").val()+" "+$("#dir6").val()+" Numero # "+$("#dir3").val()+" "+$("#dir7").val()+" - "+$("#dir4").val()+" Barrio "+$("#dir5").val();
		var fecha=$("#fecha").val();
		var tiempo=$("#tiempo").val();
		var jabon=$("#jabon").val();
		var suavizante=$("#suavizante").val();
		var latitud=$("#latitud").val();
		var longitud=$("#longitud").val();

    	var dataString="nombre="+nombre+"&telefono="+telefono+"&celular="+celular+"&direccion="+direccion+"&fecha="+fecha+"&tiempo="+tiempo+"&jabon="+jabon+"&cod_apk_cliente="+cod_apk_cliente+"&latitud="+latitud+"&longitud="+longitud+"&lavadora=";

    	if($.trim(nombre).length>0 & $.trim(telefono).length>0 & $.trim(celular).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#lavadora").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Se ha enviado tu solicitud a la central ");
						//window.parent.$('#CatModal').modal('show');
						window.parent.$("#myModal").modal('show');
						setTimeout(function() {
                        window.parent.$('#myModal').modal('hide');
                        window.location.href = "mapa.html";
                        }, 10000);
					}
					else if(data="exist")
					{
						alert("Ya habías solicitado el servicio");
					}
					else if(data="failed")
					{
						alert("Error");
					}
				}
			});
		}return false;

    });

    //Change Password
    $("#change_password").click(function(){
    	var email=localStorage.email;
    	var old_password=$("#old_password").val();
    	var new_password=$("#new_password").val();
    	var dataString="old_password="+old_password+"&new_password="+new_password+"&email="+email+"&change_password=";
    	if($.trim(old_password).length>0 & $.trim(old_password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#change_password").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your old password is incorrect");
					}
					else if(data="success")
					{
						alert("Password Changed successfully");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });

    //Forget Password
    $("#forget_password").click(function(){
    	var email=$("#email").val();
    	var dataString="email="+email+"&forget_password=";
    	if($.trim(email).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#forget_password").val('Connecting...');},
				success: function(data){
					if(data=="invalid")
					{
						alert("Your have not registered with us");
					}
					else if(data="success")
					{
						alert("we have sent password to your email address, please check");
					}
				}
			});
		}return false;

    });


    //logout function
    $("#logout").click(function(){
    	localStorage.login="false";
    	window.location.href = "login.html";
    });

    //Displaying user email on home page
    $("#email1").html(localStorage.email);
    var imageHash="http://www.gravatar.com/avatar/"+md5(localStorage.email);
    $("#profilepic").attr('src',imageHash);
	
	//Displaying user name on chat page
    $("#fullname").html(localStorage.fullname);
	var nombreusuario = localStorage.fullname;
	
});