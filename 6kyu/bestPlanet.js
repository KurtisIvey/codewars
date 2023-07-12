/*   A space agency recently launched a new satellite with the primary goal of identifying the most suitable planet within a given solar system to support human life. The satellite is equipped to scan entire solar systems and add each detected planet to a list. The satellite uses the following format when inputting planets into an array: [elements]_[surface area]. In this format, each element is represented by its chemical symbol from the periodic table. For example, a planet composed of hydrogen (H), oxygen (O), and nitrogen (N), with a surface area of 100 thousand square miles, wouled be labeled as follows:

HON_100
  You will receive a list that includes all the planets in a solar system, as well as an inclusive maximum size that a planet can be for human life. Your task is to identify the planet that possesses all the essential elements for human life while being as large as possible. The required elements for human life are: Hydrogen (H), Carbon (C), Nitrogen (N), Oxygen (O), Phosphorus (P), and Calcium (Ca). These elements are represented as follows:

["H", "O", "N", "C", "P", "Ca"]

  If none of the planets meet the requirements, then return an empty string, "". Finally, multiple planets can contain all of the required elements; in this case, return the planet that is closest to the maximum possible size.

Example:

Your input is in the form of:

bestPlanet({"OHNCCaP_100", "OHC_200", "OCa_50", "OHCCaP_400", "OHNCCaP_225", "OHCa_250"}, 250)
You should return:

"OHNCCaP_225"
Only elements from 1 to 118 are used, and there are no repeating elements on a planet periodic table */
/*
parameters: receive obj, as well as max possible size
result: expect returning string
ep:
    receive array of solar sytem
      have array list for essential elems

    let best planet = ""
    let bestSizeDifference = infinity
    for(const planet of planets)
        const [elements, size] = planets.split('_')
        split planet elems since they're a string. ('')
        use filter via essentialelements to return the missing elems
        if(size < maxSize){
                    calc size dif via Math.abs(size-maxSize)

        }
        if(missing elems === 0 && sizeDif less than bestSizeDif){
            best planet = planet
            bestSizeDif = sizeDif
        }

*/

const REQUIRED_ELEMENTS = ["H", "C", "N", "O", "P", "Ca"];

function bestPlanet(solarSystem, maxSize) {
  let max = -1; // Track the maximum size found so far
  let res = ""; // Store the best planet found

  for (const planet of solarSystem) {
    let [elements, size] = planet.split("_"); // Split the planet string into elements and size
    size = Number(size); // Convert size from string to number

    if (size > maxSize || size <= max) continue; // Skip if size exceeds maxSize or is smaller than or equal to max
    //matches for uppercase and optional lowercase. turns into an array. if none found, its empty
    elements = elements.match(/[A-Z][a-z]?/g) || []; // Extract the chemical elements using regex

    if (REQUIRED_ELEMENTS.every((e) => elements.includes(e))) {
      // Check if all required elements are present in the elements array
      max = size; // Update the maximum size
      res = planet; // Update the best planet
    }
  }

  return res; // Return the best planet found
}

console.log(
  bestPlanet(
    [
      "SgSeFmMgOBhFlAlCuYNaCaHCfSbPRgNoTlCeMdPaCNhThTbSm_125",
      "FlNoNhHOsDyIMdCaArEu_313",
      "CeFmBaFeClHPaCsCOgTiErTcB_117",
      "AsCnIrLuCfGeTbZnSrCoTmPbAmTeCaHClLrPKNoCdFmCrGaAc_159",
      "NaUNCSbRbNbPPmHCaXeArOsCoCeHgBrSnKReMdFmRnSiAg_283",
      "PdPoMoNpSLrCoAuGaIrBkRhMcBaBiNbF_272",
      "BiUFmCuNpSFlArDbDyCaFeCdTlThNeCl_391",
      "PSePaCaVHsZrTlINiSiSbAsNd_284",
      "ClHsWOsOPmCdPoBeKrDyLa_225",
      "PdSrPuXeSMgHfYbBiNa_481",
      "HePmRhNNiZrKTmBrPZnAlErMoNpAtAgSmCfPbNbHsMt_350",
      "NHArHgOBkScZnTlAgPdPbHe_285",
      "OPCCaHPtPmRbNiAuK_169",
      "MdBhYbSiHfEsCPmMcPbWScZrRnMoDs_215",
      "YbSmDyInDsPmPoReAtEsBaMtIPtMoArSbUTmBrCuGaIr_113",
      "RhTeCdPmHfSmPtMdLiAmInNaBaGePrClSrYCfBh_116",
      "HNhXeTcGeRePdFrPOgTsDyCHoCeMcCaONHsGa_375",
      "ScDyPoHOCaErHeHgLuHoCCl_149",
      "MnCrTcAmClBaCoArFrHgSbKrNh_379",
      "ClPbCGdPmFlCsNNaFeCmONpPaRhLuPrTlBi_293",
      "ClBaRfNpRnEsFrTbPbHSeBrNeNBhCaCrCnKOMnCeOsIDsAcPaAt_499",
      "AtHeEsYSmNhTaXeTmBrAmErPuNdPaCu_342",
      "ErNhNpFHsRgTcTeScRn_482",
      "RePbSbHfAlBAsTlYbTsMdCnCaTeRgGdRnEuLaCfCrBk_452",
      "DbHCNeCdXeNoAcMoNCaGd_333",
      "EuWEsHfTmDsMtGdSgRnTcCdBhYbNhMdBrBeSmPCrOsMcLv_176",
      "YMnNPHsCsInCnTmFlNeNbHLvHeOPdOg_338",
      "CoClMoKTbHoKrPbOgZrAsPoBrMcTiHsAmHePdMtPmCa_151",
      "YbScCOSiPrAgPtOgMoThSnBhV_39",
      "NaRgSbSePoOVTaPdXeErRbOs_30",
      "SeSiTeLrRuDsPmUPNoCrCoRhCuAtCaSgPoPaNCeBeTbCnB_399",
      "BAlPErMcAtPaOsGdCuTlORbXeTiNhCaHsAsNoThHfNeW_95",
      "GeHNaNHfCmCnBPaCO_221",
      "BkFeNeAgNhTaNdSbBaOIrMcAtPtHoPC_270",
      "HAlInXeOgCsBhPuCdCmNiOsDs_104",
      "OHBaBhZrAmMdFRhSgNRaRbPMoCa_121",
      "AmErCaNRbPmCSnBeTbHOCr_102",
      "CmNBPmNpTsPoNoCFOgNaNeLuKCaOLr_460",
      "MdThGeWMcNeAlHoAuTsCsIVHTbCrSbIn_443",
      "CeTbOgErRfPHoNoCnCrTeBiCmCdHgBaOs_381",
    ],
    535
  )
);
