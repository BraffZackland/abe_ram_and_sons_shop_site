import { handleDescription, handleList, handleVariation, parseRaw } from "./utils.js"
import { disassembled, reassembled, all_pads_replaced, some_pads_replaced, case_cleaned, keywork_oiled, step_ups_available, bore_oiled, inspected, cleaned, bocal_ultrasonic, boot_gasket, repad, clean_and_adjust, oil_and_adjust } from "./copy_data.js"

// REPAD
const BASSOON_REPAD_TITLE_COPY = 'Bassoon Repad'
const BASSOON_REPAD_DESC_COPY = repad
const BASSOON_REPAD_VARIATION_COPY = 'Custom pads'
const BASSOON_REPAD_OPS_COPY = [
    disassembled,
    bocal_ultrasonic,
    bore_oiled,
    all_pads_replaced,
    reassembled,
    keywork_oiled,
    boot_gasket,
    case_cleaned
]
const BASSOON_REPAD_VAROPS_COPY = [step_ups_available]
const bassoonRepadDescriptionRaw = {
    title: BASSOON_REPAD_TITLE_COPY,
    description: handleDescription(BASSOON_REPAD_DESC_COPY),
    ops: handleList(BASSOON_REPAD_OPS_COPY),
    variation: handleVariation(BASSOON_REPAD_VARIATION_COPY),
    varOps: handleList(BASSOON_REPAD_VAROPS_COPY)
}

// Clean and adjust
const BASSOON_CA_TITLE_COPY = 'Bassoon Clean and Full Adjust'
const BASSOON_CA_DESC_COPY = clean_and_adjust
const BASSOON_CA_OPS_COPY = [
    disassembled,
    cleaned,
    bocal_ultrasonic,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
]
const bassoonCleanAndAdjustDescriptionRaw = {
    title: BASSOON_CA_TITLE_COPY,
    description: handleDescription(BASSOON_CA_DESC_COPY),
    ops: handleList(BASSOON_CA_OPS_COPY),
}

// Oil and adjust
const BASSOON_OA_TITLE_COPY = 'Bassoon Oil and Full Adjust'
const BASSOON_OA_DESC_COPY = oil_and_adjust
const BASSOON_OA_OPS_COPY = [
    disassembled,
    bore_oiled,
    some_pads_replaced,
    reassembled,
    keywork_oiled,
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
const BASSOON_FA_OPS_COPY = [inspected, some_pads_replaced, keywork_oiled]
const BASSOON_FA_VAROPS_COPY = [inspected, keywork_oiled]
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