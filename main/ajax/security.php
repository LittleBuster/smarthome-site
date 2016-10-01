<?php
	include "auth.php";
	include "creds.php";

	if (check_key($_POST["key"]) == true) {
		if ($_POST["security"] == "on") {
			ini_set("allow_url_fopen", 1);
            $json = file_get_contents($smart_server."security?mode=on");
            echo $json;
		}
		if ($_POST["security"] == "off") {
			ini_set("allow_url_fopen", 1);
            $json = file_get_contents($smart_server."security?mode=off");
            echo $json;
		}
		if ($_POST["security"] == "get_status") {
			ini_set("allow_url_fopen", 1);
            $json = file_get_contents($smart_server."security?get_status");
            echo $json;
		}
	} else {
		echo '{"result": "fail"}';
	}	
?>
