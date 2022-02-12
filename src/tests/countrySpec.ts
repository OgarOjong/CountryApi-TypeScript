import countries from "../countryExercise";

it("should get basic data on the country Nigeria", async () => {
    const data = await countries.getCountry("Nigeria");
    expect(data).toEqual({ capital: "Abuja", alpha3Code: "NGA", region: "Africa" });
});

/** Add test for getRegionCountries function here */


it("should get the countries in that region", async ()=>{
    const data = await countries.getRegionCountries("EU");
    expect(data).toEqual(
        [
            "Åland Islands",
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Faroe Islands",
            "Finland",
            "France",
            "French Guiana",
            "Germany",
            "Gibraltar",
            "Greece",
            "Hungary",
            "Ireland",
            "Isle of Man",
            "Italy",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Netherlands",
            "Poland",
            "Portugal",
            "Romania",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "United Kingdom of Great Britain and Northern Ireland"
        ]
    );
});


it("should get capitals of Ottawa countries", async () => {
    const data = await countries.getRegionCapitals("Ottawa");
    expect(data).toEqual(
        {
            name: "Canada",
            topLevelDomain: [ ".ca" ],
            alpha2Code: "CA",
            alpha3Code: "CAN",
            callingCodes: [ "1" ],
            capital: "Ottawa",
            altSpellings: [ "CA" ],
            region: "Americas"
        }
    );
    // expect(data).toEqual(["Canada", "Mexico City", "Washington, D.C."]);
    
});