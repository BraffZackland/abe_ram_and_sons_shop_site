import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"

// REPAD
const CLARINET_REPAD_TITLE_COPY = 'Clarinet Repad'
const CLARINET_REPAD_DESC_COPY = 'Full service, good for a clarinet found in attics/basements, hand-me-downs that need new life, moving to a new type of pad, or fixing water/mold damage.'
const CLARINET_REPAD_VARIATION_COPY = 'Custom pads'
const CLARINET_REPAD_OPS_COPY = [
    'Disassembled',
    'Ultrasonically cleaned (unless you opt out/plastic only)',
    'Bore oiled (wood only)',
    'All pads replaced',
    'Reassembled',
    'Key work oiled and adjusted',
    'case cleaned'
]
const CLARINET_REPAD_VAROPS_COPY = [
    'Several step up and professional pad options available',
]
const clarinetRepadDescriptionRaw = {
    title: CLARINET_REPAD_TITLE_COPY,
    description: handleDescription(CLARINET_REPAD_DESC_COPY),
    ops: handleList(CLARINET_REPAD_OPS_COPY),
    variation: handleVariation(CLARINET_REPAD_VARIATION_COPY),
    varOps: handleList(CLARINET_REPAD_VAROPS_COPY)
}

// Clean and adjust
const CLARINET_CA_TITLE_COPY = 'Clarinet Clean and Full Adjust'
const CLARINET_CA_DESC_COPY = 'Full service with only needed pads replaced. Good for grimy and gunky instruments!'
const CLARINET_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const CLARINET_CA_OPS_COPY = [
    'Disassembled',
    'Cleaned',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const CLARINET_CA_VAROPS_COPY = [
    'Clarinet (plastic only) and keys are ultrasonically cleaned'
]
const clarinetCleanAndAdjustDescriptionRaw = {
    title: CLARINET_CA_TITLE_COPY,
    description: handleDescription(CLARINET_CA_DESC_COPY),
    ops: handleList(CLARINET_CA_OPS_COPY),
    variation: handleVariation(CLARINET_CA_VARIATION_COPY),
    varOps: handleList(CLARINET_CA_VAROPS_COPY)
}

// Oil and adjust
const CLARINET_OA_TITLE_COPY = 'Clarinet Oil and Full Adjust'
const CLARINET_OA_DESC_COPY = 'A more detailed full adjustment where extra attention is given to the keywork.'
const CLARINET_OA_OPS_COPY = [
    'Disassembled',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const clarinetOilAndAdjustDescriptionRaw = {
    title: CLARINET_OA_TITLE_COPY,
    description: handleDescription(CLARINET_OA_DESC_COPY),
    ops: handleList(CLARINET_OA_OPS_COPY),
}

// Full Adjust
const CLARINET_FA_TITLE_COPY = 'Clarinet Full Adjustment/Play Condition'
const CLARINET_FA_DESC_COPY = 'Your basic yearly clarinet \'tune-up\', get this done regularly to ensure your clarinet is playing its best!'
const CLARINET_FA_VARIATION_COPY = 'Minor adjustment'
const CLARINET_FA_OPS_COPY = [
    'inspected',
    'Pads replaced as needed',
    'Key work oiled and adjusted',
]
const CLARINET_FA_VAROPS_COPY = [
    'inspected',
    'Key work oiled and adjusted',
]
const clarinetFullAdjustDescriptionRaw = {
    title: CLARINET_FA_TITLE_COPY,
    description: handleDescription(CLARINET_FA_DESC_COPY),
    ops: handleList(CLARINET_FA_OPS_COPY),
    variation: handleVariation(CLARINET_FA_VARIATION_COPY),
    varOps: handleList(CLARINET_FA_VAROPS_COPY)
}

/***************************************************************************************/
const clarinetRepadDescription = parseRaw(clarinetRepadDescriptionRaw)
const clarinetOilAndAdjustDescription = parseRaw(clarinetOilAndAdjustDescriptionRaw)
const clarinetCleanAndAdjustDescription = parseRaw(clarinetCleanAndAdjustDescriptionRaw)
const clarinetFullAdjustDescription = parseRaw(clarinetFullAdjustDescriptionRaw)

export const clarinetServices = [
    { name: 'Repad', desc: clarinetRepadDescription},
    { name: 'Clean and adjust', desc: clarinetCleanAndAdjustDescription},
    { name: 'Oil and adjust', desc: clarinetOilAndAdjustDescription},
    { name: 'Full adjust', desc: clarinetFullAdjustDescription},
    { name: 'Tenon cork replacement', desc: null},
    { name: 'Neck cleaning and minor dent repair', desc: null},
]
// const clarinetServices = [
//     { name: 'Repad', desc: ''},
//     { name: 'Oil and adjust', desc: ''},
//     { name: 'Clean and adjust', desc: ''},
//     { name: 'Ultrasonic clean and adjust (plastic only)', desc: ''},
    // { name: 'Tenon cork replacement', desc: null},
    // { name: 'Neck cleaning and minor dent repair', desc: null},
// ]