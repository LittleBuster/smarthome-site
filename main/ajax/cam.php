<?php
	include "auth.php";
	include "creds.php";

	if (check_key($_POST["key"]) == true) {
		$local_file = "../photo".$_POST["cam"].".jpg";
		$remote_file = "/video/photo".$_POST["cam"].".jpg";
		
		ini_set("allow_url_fopen", 1);
                $json = file_get_contents($smart_server."cam?get_photo=".$_POST["cam"]);
		$json_str = json_decode($json);

		if ($json_str->{'result'} == "ok") {
			$conn_id = ftp_connect($ftp_server);
			$login_result = ftp_login($conn_id, $ftp_user, $ftp_passwd);
			if (ftp_get($conn_id, $local_file, $remote_file, FTP_BINARY)) {
				echo '{"result": "ok"}';
			} else {
				echo '{"result": "fail"}';
			}
		} else {
			echo '{"result": "fail"}';
		}
	} else {
		echo '{"result": "fail"}';
	}
?>
