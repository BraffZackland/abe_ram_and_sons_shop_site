import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"
import { disassembled, reassembled, all_pads_replaced, some_pads_replaced, case_cleaned, keywork_oiled, step_ups_available, bore_oiled, inspected, cleaned, bocal_ultrasonic, boot_gasket, ultrasonic, clean_and_adjust, repad, oil_and_adjust, headcork, no_hand_made } from "./copy_data.js"

// REPAD
const FLUTE_REPAD_TITLE_COPY = 'Flute Repad'
const FLUTE_REPAD_DESC_COPY = repad
const FLUTE_REPAD_VARIATION_COPY = 'Custom pads'
const FLUTE_REPAD_OPS_COPY = [
    disassembled,
    ultrasonic,
    headcork,
    all_pads_replaced,
    reassembled,
    keywork_oiled,
    case_cleaned
]
const FLUTE_REPAD_VAROPS_COPY = [
    step_ups_available,
    no_hand_made,
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
const FLUTE_CA_DESC_COPY = clean_and_adjust
const FLUTE_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const FLUTE_CA_OPS_COPY = [
    disassembled,
    cleaned,
    headcork,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
const FLUTE_OA_DESC_COPY = oil_and_adjust
const FLUTE_OA_OPS_COPY = [
    disassembled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
    inspected,
    some_pads_replaced,
    keywork_oiled,
]
const FLUTE_FA_VAROPS_COPY = [
    inspected,
    keywork_oiled,
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