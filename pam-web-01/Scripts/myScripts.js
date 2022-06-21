var loading;
var content;
var lnkFaireSimulation;
var lnkEffacerSimulation;
var lnkEnregistrerSimulation;
var lnkTerminerSession;
var lnkVoirSimulations;
var lnkRetourFormulaire;
var options;

function faireSimulation() {
    options[0].hide();
    options[1].show();
    options[2].show();
    options[3].show();
    options[4].show();
    options[5].hide();
    $.ajax({
        url: '/Pam/FaireSimulation',
        type: 'POST',
        dataType: 'cshtml',
        beforeSend: function () {
            loading.show();
        },
        succes: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            content.html(jqXHR.responseText);
        }
    })
}
function effacerSimulation() {
    $("#simulation").hide();
    options[0].show();
    options[1].show();
    options[2].hide();
    options[3].show();
    options[4].show();
    options[5].hide();
}
function enregistrerSimulation() {
    options[0].hide();
    options[1].hide();
    options[2].hide();
    options[3].hide();
    options[4].show();
    options[5].show();
    $.ajax({
        url: '/Pam/EnregistrerSimulation',
        type: 'POST',
        dataType: 'cshtml',
        beforeSend: function () {
            loading.show();
        },
        succes: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            content.html(jqXHR.responseText);
        }
    })
}
function voirSimulations() {
    options[0].hide();
    options[1].hide();
    options[2].hide();
    options[3].hide();
    options[4].show();
    options[5].show();
    $.ajax({
        url: '/Pam/VoirSimulation',
        type: 'POST',
        dataType: 'cshtml',
        beforeSend: function () {
            loading.show();
        },
        succes: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            content.html(jqXHR.responseText);
        }
    })
}
function retourFormulaire() {
    options[0].show();
    options[1].hide();
    options[2].hide();
    options[3].show();
    options[4].show();
    options[5].hide();
    $.ajax({
        url: '/Pam/RetourFormulaire',
        type: 'POST',
        dataType: 'cshtml',
        beforeSend: function () {
            loading.show();
        },
        succes: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            content.html(jqXHR.responseText);
        }
    })
}
function terminerSession() {
    options[0].hide();
    options[1].hide();
    options[2].show();
    options[3].show();
    options[4].show();
    options[5].hide();
    $.ajax({
        url: '/Pam/TerminerSession',
        type: 'POST',
        dataType: 'cshtml',
        beforeSend: function () {
            loading.show();
        },
        succes: function (data) {
            content.html(data);
        },
        complete: function () {
            loading.hide();
        },
        error: function (jqXHR) {
            content.html(jqXHR.responseText);
        }
    })
}
function setMenu(show) {
    options[0].show();
    options[1].hide();
    options[2].hide();
    options[3].show();
    options[4].show();
    options[5].hide();
}
// au chargement du document
$(document).ready(function () {
    // on récupère les références dzs différents composants de la page
    loading = $("#loading");
    content = $("#content");
    lnkFaireSimulation = $("#lnkFaireSimulation");
    lnkEffacerSimulation = $("#lnkEffacerSimulation");
    lnkEnregistrerSimulation = $("#lnkEnregistrerSimulation");
    lnkVoirSimulations = $("#lnkVoirSimulations");
    lnkTerminerSession = $("#lnkTerminerSession");
    lnkRetourFormulaire = $("#lnkRetourFormulaire");
    options = [lnkFaireSimulation, lnkEffacerSimulation, lnkEnregistrerSimulation, lnkVoirSimulations, lnkTerminerSession, lnkRetourFormulaire];
    loading.hide();
    setMenu([lnkFaireSimulation, lnkVoirSimulations, lnkTerminerSession]);
});