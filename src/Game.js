import Country from "./Country";

class Game {
    #score;
    constructor(propreties) {
        this.dataCountries = propreties;
        this.countryIndex;
        this.currentCountry = new Country(this.dataCountries[this.countryIndex]);

        // this.countryCountry.displayFlag();
    }
}

export default Game;