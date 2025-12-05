import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"
import { disassembled, reassembled, all_pads_replaced, some_pads_replaced, case_cleaned, keywork_oiled, step_ups_available, bore_oiled, inspected, cleaned, bocal_ultrasonic, boot_gasket, ultrasonic, oil_and_adjust, clean_and_adjust, repad } from "./copy_data.js"

// REPAD
const OBOE_REPAD_TITLE_COPY = 'Oboe Repad'
const OBOE_REPAD_DESC_COPY = repad
const OBOE_REPAD_VARIATION_COPY = 'Custom pads'
const OBOE_REPAD_OPS_COPY = [
    disassembled,
    ultrasonic,
    bore_oiled,
    all_pads_replaced,
    reassembled,
    keywork_oiled,
    case_cleaned
]
const OBOE_REPAD_VAROPS_COPY = [
    step_ups_available,
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
const OBOE_CA_DESC_COPY = clean_and_adjust
const OBOE_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const OBOE_CA_OPS_COPY = [
    disassembled,
    cleaned,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
const OBOE_OA_DESC_COPY = oil_and_adjust
const OBOE_OA_OPS_COPY = [
    disassembled,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
    inspected,
    some_pads_replaced,
    keywork_oiled,
]
const OBOE_FA_VAROPS_COPY = [
    inspected,
    keywork_oiled,
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