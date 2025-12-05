import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"
import { disassembled, reassembled, all_pads_replaced, some_pads_replaced, case_cleaned, keywork_oiled, step_ups_available, bore_oiled, inspected, cleaned, bocal_ultrasonic, boot_gasket, ultrasonic, oil_and_adjust, clean_and_adjust, repad } from "./copy_data.js"

// REPAD
const CLARINET_REPAD_TITLE_COPY = 'Clarinet Repad'
const CLARINET_REPAD_DESC_COPY = repad
const CLARINET_REPAD_VARIATION_COPY = 'Custom pads'
const CLARINET_REPAD_OPS_COPY = [
    disassembled,
    ultrasonic,
    bore_oiled,
    all_pads_replaced,
    reassembled,
    keywork_oiled,
    case_cleaned
]
const CLARINET_REPAD_VAROPS_COPY = [
    step_ups_available,
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
const CLARINET_CA_DESC_COPY = clean_and_adjust
const CLARINET_CA_VARIATION_COPY = 'Ultrasonic clean and adjust'
const CLARINET_CA_OPS_COPY = [
    disassembled,
    cleaned,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
const CLARINET_OA_DESC_COPY = oil_and_adjust
const CLARINET_OA_OPS_COPY = [
    disassembled,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
    inspected,
    some_pads_replaced,
    keywork_oiled,
]
const CLARINET_FA_VAROPS_COPY = [
    inspected,
    keywork_oiled,
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
