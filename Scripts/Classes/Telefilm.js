/**
*SIMPLE CLASS: Describes telefilms
*/
var Telefilm = function (name, characters) {
    this.name = name;
    this.charaters = characters;
};

Telefilm.prototype.setCharacters = function (charaters) {
    this.charaters = charaters;
};
Telefilm.prototype.viewTelefilm = function (element) {
    element.innerHTML = this.name + ":" + this.charaters.join(",");
};

