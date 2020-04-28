// Quand le bouton est cliqué
$('form').submit(function(e){

    e.preventDefault();

    let cityToSearch = $('#form-search').val();

    // Verification que la recherche comporte au moins 1 caractere
    if(cityToSearch.length < 1){
        $('.view').html('<p class ="red"> Champ vide ! </p>');
    }else{
        //Requete AJAX pour récupérer le JSON de la page serveur.php (qui contiendra un tableau de villes)
            $.getJSON('https://geo.api.gouv.fr/communes/', $(this).serialize(), function (data){
                //Création du tableau HTML avec en-têtes et tbody vide
                let citiesTable = $(`
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Codes Postaux</th>
                                <th>Population</th>
                                <th>Departement</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`
                    );

                    // Pour chaque ville dans le tableau data (villes reçues via la requête AJAX) on créer un nouveau <tr> dans le tableau

                data.forEach(function(city){
                    //Création de la <tr> de la ville en cours
                    let newCity= $('<tr></tr>');
                    //Création du premier <td> contenant la version protégée (.text) du nom de la voiture
                    let cityName = $('<td></td>');
                    cityName.text(city.name);
                    //Création du deuxième <td> contenant la version protégée (.text) du codepostal de la ville
                    let cityZipcode = $('<td></td>');
                    cityZipcode.text(city.zipcode);
                    //Création du troisieme <td> contenant la version protégée (.text) de la population de la ville
                    let cityPopulation = $('<td></td>');
                    cityPopulation.text(city.population);
                    //Création du quatrième <td> contenant la version protégée (.text) du numero de departement
                    let cityNumber = $('<td></td>');
                    cityNumber.text(city.number);

                    //Insertion des 4 <td>
                    newCity.append(cityName);
                    newCity.append(cityZipcode);
                    newCity.append(cityPopulation);
                    newCity.append(cityNumber);

                    // Insertion de la tr dans le <tbody> du tableau
                    citiesTable.find ('tbody').append(newCity);
                });
                // Insertion du tableau dans la page, dans la div.view (.html écrasera les anciens contenus de la div comme les erreurs/ autres tableaux)
                $('.view').html(citiesTable);

        }).fail(function(){
            //Si on est ici c'est qu'il y a eu un problème, donc on affiche un message d'erreur
            $('view').html('<p class="error">Problème de connexion</p>');
        });
    };
});