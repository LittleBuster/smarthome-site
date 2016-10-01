var timeout_id = setTimeout(action, 2000);

function meteo_update()
{
	$.ajax({
		url: "ajax/meteo.php",
		method: "POST",
		data: {meteo: "get_weather", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				if (data.meteo[0] != -2000) {
					$("#temp1").html(data.meteo[0] + "&deg;");				
					$("#hum1").html(data.meteo[1] + "%");				
				} else {
					$("#temp1").html('<font color="red">#Ошибка</font>');				
					$("#hum1").html('<font color="red">#Ошибка</font>');				
				}
				if (data.meteo[2] != -2000) {
					$("#temp2").html(data.meteo[2] + "&deg;");				
					$("#hum2").html(data.meteo[3] + "%");
				} else {
					$("#temp2").html('<font color="red">#Ошибка</font>');				
					$("#hum2").html('<font color="red">#Ошибка</font>');				
				}
				if (data.meteo[4] != -2000) {
					$("#temp3").html(data.meteo[4] + "&deg;");				
					$("#hum3").html(data.meteo[5] + "%");				
				} else {
					$("#temp3").html('<font color="red">#Ошибка</font>');				
					$("#hum3").html('<font color="red">#Ошибка</font>');				
				}
				if (data.meteo[6] != -2000) {
					$("#temp4").html(data.meteo[6] + "&deg;");				
					$("#hum4").html(data.meteo[7] + "%");				
				} else {
					$("#temp4").html('<font color="red">#Ошибка</font>');				
					$("#hum4").html('<font color="red">#Ошибка</font>');				
				}
			} else {
				$("#temp1").html('<font color="red">#Ошибка</font>');				
				$("#hum1").html('<font color="red">#Ошибка</font>');				
				$("#temp2").html('<font color="red">#Ошибка</font>');				
				$("#hum2").html('<font color="red">#Ошибка</font>');				
				$("#temp3").html('<font color="red">#Ошибка</font>');				
				$("#hum3").html('<font color="red">#Ошибка</font>');				
				$("#temp4").html('<font color="red">#Ошибка</font>');				
				$("#hum4").html('<font color="red">#Ошибка</font>');				
			}
		}
    });
}


window.onload = function() {
	meteo_update();
}

function action() {
	meteo_update();
	timeout_id = setTimeout(action, 2000);
}
