/**
*simple module 
*/
envDefine(["../Classes/Telefilm"], function () {
    var telefilm = new Telefilm("Scrubs", ["John Dorian", "Turk", "Elliot Reid", "Carla Espinosa"]);
    telefilm.viewTelefilm(document.getElementById("telefilms"));
});