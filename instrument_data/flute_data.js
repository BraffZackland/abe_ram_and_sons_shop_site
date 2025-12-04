import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"

// REPAD
const FLUTE_REPAD_TITLE_COPY = 'Flute Repad'
const FLUTE_REPAD_DESC_COPY = 'Full service, good for flutes found in attics/basements, hand-me-downs that need new life, moving to a new type of pad, or fixing water/mold damage.'
const FLUTE_REPAD_VARIATION_COPY = 'Custom pads'
const FLUTE_REPAD_OPS_COPY = [
    'Disassembled',
    'Ultrasonically cleaned (unless you opt out)',
    'Headcork replaced',
    'All pads replaced',
    'Reassembled',
    'Key work oiled and adjusted',
    'case cleaned'
]
const FLUTE_REPAD_VAROPS_COPY = [
    'Several step up and professional pad options available',
    'Note: I do not currently offer hand-made flute repads with ultra high end pads like Straubinger'
]
const fluteRepadDescriptionRaw = {
    title: FLUTE_REPAD_TITLE_COPY,
    description: handleDescription(FLUTE_REPAD_DESC_COPY),
    ops: handleList(FLUTE_REPAD_OPS_COPY),
    variation: handleVariation(FLUTE_REPAD_VARIATION_COPY),
    varOps: handleList(FLUTE_REPAD_VAROPS_COPY)
}

// Clean and adjust
const FLUTE_CA_TITLE_COPY = 'Flute Clean and Full Adjust'
const FLUTE_CA_DESC_COPY = 'Full service with only needed pads replaced. Good for grimy and gunky instruments or making sure your flute looks its best for a show!'
const FLUTE_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const FLUTE_CA_OPS_COPY = [
    'Disassembled',
    'Cleaned',
    'Headcork replaced',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const FLUTE_CA_VAROPS_COPY = [
    'Flute and keys are ultrasonically cleaned'
]
const fluteCleanAndAdjustDescriptionRaw = {
    title: FLUTE_CA_TITLE_COPY,
    description: handleDescription(FLUTE_CA_DESC_COPY),
    ops: handleList(FLUTE_CA_OPS_COPY),
    variation: handleVariation(FLUTE_CA_VARIATION_COPY),
    varOps: handleList(FLUTE_CA_VAROPS_COPY)
}

// Oil and adjust
const FLUTE_OA_TITLE_COPY = 'Flute Oil and Full Adjust'
const FLUTE_OA_DESC_COPY = 'A more detailed full adjustment where extra attention is given to the keywork.'
const FLUTE_OA_OPS_COPY = [
    'Disassembled',
    'Pads replaced as needed',
    'Reassembled',
    'Key work oiled and adjusted',
]
const fluteOilAndAdjustDescriptionRaw = {
    title: FLUTE_OA_TITLE_COPY,
    description: handleDescription(FLUTE_OA_DESC_COPY),
    ops: handleList(FLUTE_OA_OPS_COPY),
}

// Full Adjust
const FLUTE_FA_TITLE_COPY = 'Flute Full Adjustment/Play Condition'
const FLUTE_FA_DESC_COPY = 'Your basic regular flute \'tune-up\', get this done yearly to ensure you\'re flute is playing its best!'
const FLUTE_FA_VARIATION_COPY = 'Minor adjustment'
const FLUTE_FA_OPS_COPY = [
    'inspected',
    'Pads replaced as needed',
    'Key work oiled and adjusted',
]
const FLUTE_FA_VAROPS_COPY = [
    'inspected',
    'Key work oiled and adjusted',
]
const fluteFullAdjustDescriptionRaw = {
    title: FLUTE_FA_TITLE_COPY,
    description: handleDescription(FLUTE_FA_DESC_COPY),
    ops: handleList(FLUTE_FA_OPS_COPY),
    variation: handleVariation(FLUTE_FA_VARIATION_COPY),
    varOps: handleList(FLUTE_FA_VAROPS_COPY)
}

/***************************************************************************************/
const fluteRepadDescription = parseRaw(fluteRepadDescriptionRaw)
const fluteOilAndAdjustDescription = parseRaw(fluteOilAndAdjustDescriptionRaw)
const fluteCleanAndAdjustDescription = parseRaw(fluteCleanAndAdjustDescriptionRaw)
const fluteFullAdjustDescription = parseRaw(fluteFullAdjustDescriptionRaw)

export const fluteServices = [
    { name: 'Repad', desc: fluteRepadDescription},
    { name: 'Clean and adjust', desc: fluteCleanAndAdjustDescription},
    { name: 'Oil and adjust', desc: fluteOilAndAdjustDescription},
    { name: 'Full adjust', desc: fluteFullAdjustDescription},
    { name: 'Head cork replacement', desc: null},
    { name: 'Minor dent work', desc: null},
]