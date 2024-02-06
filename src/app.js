"use strict"

import Game from "./Game";

import { shuffle } from "lodash";
import Country from "./Country";

const restCountriesURL = "https://restcountries.com/v3.1/all";

const apiRequest = async (url) => {

    const response = await fetch(url);
    const dataCountries = await response.json();
    return dataCountries;
};

(async () => {
    try {
        const dataCountries = await apiRequest(restCountriesURL);
        console.log(dataCountries);

        const cleanData = (countries) => {
            const cleanedData = countries.map(countries => {
                return {
                    name: countries.name,
                    flag: countries.flag,
                    translation: countries.translations
                };
            });
            return cleanedData;
        }

        const formAnswer = document.querySelector('form');
        formAnswer.addEventListener("submit", (e) => {
            e.preventDefault();

            const form = document.querySelector("form");
            const formData = new FormData(form);
            console.log(formData);

            nextcountry();

        });

        const countriesClean = cleanData(dataCountries);
        console.log(countriesClean);

        const dataCountriesShuffle = shuffle(countriesClean);
        console.log(dataCountriesShuffle);

        const test = new Country(dataCountriesShuffle);
        console.log(test);
        test.displayFlag();

        // new Game(dataCountriesShuffle);


    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();








