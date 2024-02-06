class Country {
    constructor(propreties) {
        this.name = propreties[0].name.common
        this.flag = propreties[0].flag
        // this.translations = this.validAnswers(propreties[0].translation)
        this.goodAnswers = propreties[0].translation

    }

    // validAnswers() {
    //     const answers = new Set(this.translations);
    //     answers.forEach((element) => {
    //         Object.values(element);
    //     })
    //     return answers;
    // }

    displayFlag() {
        const containerFalg = document.querySelector("#flag");
        const flag = document.createElement("h1");

        const childHTML = `
		<h1>${this.flag}</h1>`
        // < h1 > <img src="${this.flag}" /></h1>

        containerFalg.insertAdjacentHTML("afterbegin", childHTML);

        return flag;
    }

}
export default Country;