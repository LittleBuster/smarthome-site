<?php
	include "auth.php";
	include "creds.php";

	if (check_key($_POST["key"]) == true) {
		if ($_POST["termo"] == "get_status") {
			ini_set("allow_url_fopen", 1);
                        $json = file_get_contents($smart_server."termo?get_status");
                        echo $json;
		}
		if ($_POST["termo"] == "get_temp") {
			ini_set("allow_url_fopen", 1);
                        $json = file_get_contents($smart_server."termo?get_temp");
                        echo $json;
		}
		if ($_POST["termo"] == "on") {
			ini_set("allow_url_fopen", 1);
                        $json = file_get_contents($smart_server."termo?termo_control=on");
                        echo $json;
		}
		if ($_POST["termo"] == "off") {
			ini_set("allow_url_fopen", 1);
                        $json = file_get_contents($smart_server."termo?termo_control=off");
                        echo $json;
		}
	} else {
		echo '{"result": "fail"}';
	}	
?>
