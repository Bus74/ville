<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Villes</title>
<style>
.view{
        border: 1px solid black;
        min-height: 200px;
        width: 80%;
        margin:auto;
        padding: 25px;
    }
.button-area{
        text-align: center;
        margin: 20px 0;
    }
.formulaire{
    text-align: center;
}


</style>

</head>
<body>
    

<div class = "formulaire">
    <h1>Récupérer les infos d'une ville à partir del'api :</h1>
    <h2><a href="https://geo.api.gouv.fr/api-geo.html">https://geo.api.gouv.fr/api-geo.html</a></h2>
    <h2> URL de base :</h2>
    <p>https://geo.api.gouv.fr/communes/?nom=VILLE</p>
</div>

<div class="button-area">
    <form action="php/login.php" method="POST">
        <input type="text" name="nom" id="form-search" placeholder="Nom de la ville">
        <input type="submit">
    </form>
</div>


<div class="view">
</div>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>

    </body>
</html>