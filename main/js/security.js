var timeout_id = setTimeout(action, 5000);

function security_update()
{
	$.ajax({
		url: "ajax/security.php",
		method: "POST",
		data: {security: "get_status", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				if (data.status == 1) {
					$("#stat").html('<font color="green">Включена</font>');
					$("#btn0").show();
					$("#btn1").hide();
				}
				else {
					$("#stat").html('<font color="red">Отключена</font>');
					$("#btn0").hide();
					$("#btn1").show();
				}
			} else {
				$("#stat").html('<font color="red">#Ошибка</font>');
				$("#btn0").hide();
				$("#btn1").show();
			}
		}
	});
}

function btn0_on_click() {
	$.ajax({
		url: "ajax/security.php",
		method: "POST",
		data: {security: "off", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				security_update();
			} else {
				alert("Ошибка выключения сигнализация!");
			}
		}
	});
}

function btn1_on_click() {
	$.ajax({
		url: "ajax/security.php",
		method: "POST",
		data: {security: "on", key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if(data.result == "ok") {
				security_update();
			} else {
				alert("Ошибка включения сигнализация!");
			}
		}
	});
}

window.onload = function() {
	security_update();
}

function action() {
	security_update();
	timeout_id = setTimeout(action, 5000);
}