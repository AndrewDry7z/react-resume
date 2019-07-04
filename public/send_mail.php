<?php

$post_data = $_POST;

$to = 'andrewch136@yandex.ru';
$subject = 'Сообщение с сайта kolbasim.site';
$message = 'Сообщение с сайта kolbasim.site <br />
Имя: ' . $_POST['name'] . '<br />
E-mail: ' . $_POST['email'] . '<br />
Сообщение: ' . $_POST['message'];

$headers = "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n"."From: Kolbasim.Site <no-reply@kolbasim.site>\r\n";
mail ($to, $subject, $message, iconv ('utf-8', 'windows-1251', $headers));