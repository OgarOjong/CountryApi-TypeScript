"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryExercise_1 = __importDefault(require("../countryExercise"));
it("should get basic data on the country Nigeria", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield countryExercise_1.default.getCountry("Nigeria");
    expect(data).toEqual({ capital: "Abuja", alpha3Code: "NGA", region: "Africa" });
}));
/** Add test for getRegionCountries function here */
it("should get the countries in that region", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield countryExercise_1.default.getRegionCountries("EU");
    expect(data).toEqual([
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
    ]);
}));
it("should get capitals of Ottawa countries", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield countryExercise_1.default.getRegionCapitals("Ottawa");
    expect(data).toEqual({
        name: "Canada",
        topLevelDomain: [".ca"],
        alpha2Code: "CA",
        alpha3Code: "CAN",
        callingCodes: ["1"],
        capital: "Ottawa",
        altSpellings: ["CA"],
        region: "Americas"
    });
    // expect(data).toEqual(["Canada", "Mexico City", "Washington, D.C."]);
}));
