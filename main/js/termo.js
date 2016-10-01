var timeout_id = setTimeout(action, 5000);

function termo_update()
{
	$.ajax({
		url: "ajax/meteo.php",
		method: "POST",
		data: {meteo: "get_weather", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				if (data.meteo[2] != -2000)
					$("#temp_cur").html(data.meteo[2]+"&deg;");
				else
					$("#temp_cur").html('<font color="red">#Ошибка</font>');
			} else {
					$("#temp_cur").html('<font color="red">#Ошибка</font>');
			}
		}
	});
	$.ajax({
		url: "ajax/termo.php",
		method: "POST",
		data: {termo: "get_temp", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				if (data.temp != -2000)
					$("#temp_max").html(data.temp+"&deg;");	
				else
					$("#temp_max").html('<font color="red">#Ошибка</font>');
			} else {
				$("#temp_max").html('<font color="red">#Ошибка</font>');
			}
		}
	});
	$.ajax({
		url: "ajax/termo.php",
		method: "POST",
		data: {termo: "get_status", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				if (data.status == 1) {
					$("#img_on0").show();
					$("#img_off0").hide();
					$("#btn0").show();	
					$("#btn1").hide();	
				} else {
					$("#img_on0").hide();	
					$("#img_off0").show();
					$("#btn1").show();	
					$("#btn0").hide();	
				}
			} else {
				alert("Ошибка получения статуса!");
			}
		}
	});
}

function btn0_on_click() {
	$.ajax({
		url: "ajax/termo.php",
		method: "POST",
		data: {termo: "off", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				$("#img_on0").hide();	
				$("#img_off0").show();
			} else {
				alert("Ошибка выключения термоконтроля!");
			}
		}
	});
	termo_update();
}

function btn1_on_click() {
	$.ajax({
		url: "ajax/termo.php",
		method: "POST",
		data: {termo: "on", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				$("#img_on0").show();	
				$("#img_off0").hide();
			} else {
				alert("Ошибка включения термоконтроля!");
			}
		}
	});
	termo_update();
}

window.onload = function() {
	termo_update();
}

function action() {
	termo_update();
	timeout_id = setTimeout(action, 5000);
}
