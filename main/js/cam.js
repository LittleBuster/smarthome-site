function get_photo($cam)
{
	$.ajax({
		url: "ajax/cam.php",
		method: "POST",
		data: {cam: $cam, key: localStorage.apiKey},
		dataType: "json",
		success: function(data) {
			if (data.result == "ok") {
				$("#photo" + $cam).html('<img width=1024 height=768 src="photo' + $cam + '.jpg" />');
			} else {
				$("#photo" + $cam).html('<p><h3><font color="red">Ошибка камеры #' + $cam + '</font></h3></p>');
			}
		}
    });
	
}

window.onload = function() {
	get_photo("0");
}
