import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"

// REPAD
const OBOE_REPAD_TITLE_COPY = 'Oboe Repad'
const OBOE_REPAD_DESC_COPY = 'Full service, good for a oboe found in attics/basements, hand-me-downs that need new life, moving to a new type of pad, or fixing water/mold damage.'
const OBOE_REPAD_VARIATION_COPY = 'Custom pads'
const OBOE_REPAD_OPS_COPY = [
    'Disassembled',
    'Ultrasonically cleaned (unless you opt out/plastic only)',
    'Bore oiled (wood only)',
    'All pads replaced',
    'Reassembled',
    'Key work oiled and adjusted',
    'case cleaned'
]
const OBOE_REPAD_VAROPS_COPY = [
    'Several step up and professional pad options available',
]
const oboeRepadDescriptionRaw = {
    title: OBOE_REPAD_TITLE_COPY,
    description: handleDescription(OBOE_REPAD_DESC_COPY),
    ops: handleList(OBOE_REPAD_OPS_COPY),
    variation: handleVariation(OBOE_REPAD_VARIATION_COPY),
    varOps: handleList(OBOE_REPAD_VAROPS_COPY)
}

// Clean and adjust
const OBOE_CA_TITLE_COPY = 'Oboe Clean and Full Adjust'
const OBOE_CA_DESC_COPY = 'Full service with only needed pads replaced. Good for grimy and gunky instruments!'
const OBOE_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const OBOE_CA_OPS_COPY = [
    'Disassembled',
    'Cleaned',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const OBOE_CA_VAROPS_COPY = [
    'Oboe (plastic only) and keys are ultrasonically cleaned'
]
const oboeCleanAndAdjustDescriptionRaw = {
    title: OBOE_CA_TITLE_COPY,
    description: handleDescription(OBOE_CA_DESC_COPY),
    ops: handleList(OBOE_CA_OPS_COPY),
    variation: handleVariation(OBOE_CA_VARIATION_COPY),
    varOps: handleList(OBOE_CA_VAROPS_COPY)
}

// Oil and adjust
const OBOE_OA_TITLE_COPY = 'Oboe Oil and Full Adjust'
const OBOE_OA_DESC_COPY = 'A more detailed full adjustment where extra attention is given to the keywork.'
const OBOE_OA_OPS_COPY = [
    'Disassembled',
    'Bore oiled (wood only)',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const oboeOilAndAdjustDescriptionRaw = {
    title: OBOE_OA_TITLE_COPY,
    description: handleDescription(OBOE_OA_DESC_COPY),
    ops: handleList(OBOE_OA_OPS_COPY),
}

// Full Adjust
const OBOE_FA_TITLE_COPY = 'Oboe Full Adjustment/Play Condition'
const OBOE_FA_DESC_COPY = 'Your basic yearly oboe \'tune-up\', get this done regularly to ensure your oboe is playing its best!'
const OBOE_FA_VARIATION_COPY = 'Minor adjustment'
const OBOE_FA_OPS_COPY = [
    'inspected',
    'Pads replaced as needed',
    'Key work oiled and adjusted',
]
const OBOE_FA_VAROPS_COPY = [
    'inspected',
    'Key work oiled and adjusted',
]
const oboeFullAdjustDescriptionRaw = {
    title: OBOE_FA_TITLE_COPY,
    description: handleDescription(OBOE_FA_DESC_COPY),
    ops: handleList(OBOE_FA_OPS_COPY),
    variation: handleVariation(OBOE_FA_VARIATION_COPY),
    varOps: handleList(OBOE_FA_VAROPS_COPY)
}

/***************************************************************************************/
const oboeRepadDescription = parseRaw(oboeRepadDescriptionRaw)
const oboeOilAndAdjustDescription = parseRaw(oboeOilAndAdjustDescriptionRaw)
const oboeCleanAndAdjustDescription = parseRaw(oboeCleanAndAdjustDescriptionRaw)
const oboeFullAdjustDescription = parseRaw(oboeFullAdjustDescriptionRaw)

export const oboeServices = [
    { name: 'Repad', desc: oboeRepadDescription},
    { name: 'Oil and adjust', desc: oboeOilAndAdjustDescription},
    { name: 'Clean and adjust', desc: oboeCleanAndAdjustDescription},
    { name: 'Full adjust', desc: oboeFullAdjustDescription},
    { name: 'Bocal cleaning and minor dent repair', desc: null},
    { name: 'Tenon cork replacement', desc: null},
]