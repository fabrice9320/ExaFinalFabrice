import Country from "./Country";

class Game {
    #score;
    constructor(propreties) {
        this.dataCountries = propreties;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.dataCountries[this.countryIndex]);

        // this.countryCountry.displayFlag();
    }



    nextCountry() {
        displayCountry(this.countryIndex);
        this.countryIndex = this.countryIndex + 1;
    }

}

export default Game;