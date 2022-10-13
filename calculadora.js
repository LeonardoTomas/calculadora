<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .fundo{
            background-image: linear-gradient(45deg,black, crimson);
            height: 100vh;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
        }
        .calculadora{
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 15px;
            padding: 15px;
        }
        .botao{
            width: 50px;
            height: 50px;
            font-size: 25px;
            cursor: pointer;
            margin: 3px;
            background-color: rgb(31,31,31);
            border: none;
            color: #fff;
        }
        .botao:hover{
            background-color: black;
        }
        #resultado{
            background-color: white;
            width: 207px;
            height: 30px;
            margin: 5px;
            font-size: 25px;
            color: black;
            text-align: right;
            padding: 5px;
        }
    </style>
</head>


<h1>oi </h1>