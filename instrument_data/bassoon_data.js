import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"

// REPAD
const BASSOON_REPAD_TITLE_COPY = 'Bassoon Repad'
const BASSOON_REPAD_DESC_COPY = 'Full service, good for a bassoon found in attics/basements, hand-me-downs that need new life, moving to a new type of pad, or fixing water/mold damage.'
const BASSOON_REPAD_VARIATION_COPY = 'Custom pads'
const BASSOON_REPAD_OPS_COPY = [
    'Disassembled',
    'Bocal ultrasonically cleaned (unless you opt out)',
    'Bore oiled (wood only)',
    'All pads replaced',
    'Reassembled',
    'Key work oiled and adjusted',
    'Boot gasket changed',
    'case cleaned'
]
const BASSOON_REPAD_VAROPS_COPY = [
    'Several step up and professional pad options available',
]
const bassoonRepadDescriptionRaw = {
    title: BASSOON_REPAD_TITLE_COPY,
    description: handleDescription(BASSOON_REPAD_DESC_COPY),
    ops: handleList(BASSOON_REPAD_OPS_COPY),
    variation: handleVariation(BASSOON_REPAD_VARIATION_COPY),
    varOps: handleList(BASSOON_REPAD_VAROPS_COPY)
}

// Clean and adjust
const BASSOON_CA_TITLE_COPY = 'Bassoon Clean and Full Adjust'
const BASSOON_CA_DESC_COPY = 'Full service with only needed pads replaced. Good for grimy and gunky instruments!'
const BASSOON_CA_OPS_COPY = [
    'Disassembled',
    'Cleaned',
    'Bocal ultrasonically cleaned (unless you opt out)',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const bassoonCleanAndAdjustDescriptionRaw = {
    title: BASSOON_CA_TITLE_COPY,
    description: handleDescription(BASSOON_CA_DESC_COPY),
    ops: handleList(BASSOON_CA_OPS_COPY),
}

// Oil and adjust
const BASSOON_OA_TITLE_COPY = 'Bassoon Oil and Full Adjust'
const BASSOON_OA_DESC_COPY = 'A more detailed full adjustment where extra attention is given to the keywork.'
const BASSOON_OA_OPS_COPY = [
    'Disassembled',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const bassoonOilAndAdjustDescriptionRaw = {
    title: BASSOON_OA_TITLE_COPY,
    description: handleDescription(BASSOON_OA_DESC_COPY),
    ops: handleList(BASSOON_OA_OPS_COPY),
}

// Full Adjust
const BASSOON_FA_TITLE_COPY = 'Bassoon Full Adjustment/Play Condition'
const BASSOON_FA_DESC_COPY = 'Your basic yearly bassoon \'tune-up\', get this done regularly to ensure your bassoon is playing its best!'
const BASSOON_FA_VARIATION_COPY = 'Minor adjustment'
const BASSOON_FA_OPS_COPY = [
    'inspected',
    'Pads replaced as needed',
    'Key work oiled and adjusted',
]
const BASSOON_FA_VAROPS_COPY = [
    'inspected',
    'Key work oiled and adjusted',
]
const bassoonFullAdjustDescriptionRaw = {
    title: BASSOON_FA_TITLE_COPY,
    description: handleDescription(BASSOON_FA_DESC_COPY),
    ops: handleList(BASSOON_FA_OPS_COPY),
    variation: handleVariation(BASSOON_FA_VARIATION_COPY),
    varOps: handleList(BASSOON_FA_VAROPS_COPY)
}

/***************************************************************************************/
const bassoonRepadDescription = parseRaw(bassoonRepadDescriptionRaw)
const bassoonOilAndAdjustDescription = parseRaw(bassoonOilAndAdjustDescriptionRaw)
const bassoonCleanAndAdjustDescription = parseRaw(bassoonCleanAndAdjustDescriptionRaw)
const bassoonFullAdjustDescription = parseRaw(bassoonFullAdjustDescriptionRaw)

export const bassoonServices = [
    { name: 'Repad', desc: bassoonRepadDescription},
    { name: 'Oil and adjust', desc: bassoonOilAndAdjustDescription},
    { name: 'Clean and adjust', desc: bassoonCleanAndAdjustDescription},
    { name: 'Full adjust', desc: bassoonFullAdjustDescription},
    { name: 'Bocal cleaning and minor dent repair', desc: null},
    { name: 'Tenon material replacement (string/cork/synthetic)', desc: null},
]