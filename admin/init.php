<?php
ini_set( 'display_errors', 1 ); 
function init() {
  ini_set("output_buffering", "On");
  ini_set("output_handler", "mb_output_handler");
  ini_set("default_charset", "utf-8");
  mb_language("Japanese");
  mb_internal_encoding ("utf-8");
  mb_http_input("auto");
  mb_http_output("utf-8");
  mb_detect_order("auto");
  mb_substitute_character("none");
  ob_start("mb_output_handler");
  session_start();
}

?>
