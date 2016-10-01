<?php
	include "auth.php";
	include "creds.php";

	if (check_key($_POST["key"]) == true) {
		if ($_POST["meteo"] == "get_weather") {
			ini_set("allow_url_fopen", 1);
                        $json = file_get_contents($smart_server."meteo?get_weather");
                        echo $json;
		}
	} else {
		echo '{"result": "fail"}';
	}	
?>
