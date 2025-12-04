import { helper } from "./instrument_data/utils.js"
import { fluteServices } from "./instrument_data/flute_data.js"
import { oboeServices } from "./instrument_data/oboe_data.js"
import { bassoonServices } from "./instrument_data/bassoon_data.js"
import { clarinetServices } from "./instrument_data/clarinet_data.js"
import { otherServices } from "./instrument_data/other_data.js"
import { threeDServices } from "./instrument_data/threeD_data.js"
import { repairBioCopy, musicBioCopy, tagLineCopy } from "./instrument_data/copy_data.js"

const repairBio = document.getElementById('repair-bio')
const musicBio = document.getElementById('music-bio')
const tagLine = document.getElementsByClassName('sub-text')[0]

const fluteServc = document.getElementById('fluteServc')
const oboeServc = document.getElementById('oboeServc')
const bassoonServc = document.getElementById('bassoonServc')
const clarinetServc = document.getElementById('clarinetServc')
const otherServc = document.getElementById('otherServc')
const threeD = document.getElementById('threeD')

repairBio.textContent = repairBioCopy
musicBio.textContent = musicBioCopy
tagLine.innerHTML = tagLineCopy

fluteServc.innerHTML = helper(fluteServices)
oboeServc.innerHTML = helper(oboeServices)
bassoonServc.innerHTML = helper(bassoonServices)
clarinetServc.innerHTML = helper(clarinetServices)
otherServc.innerHTML = helper(otherServices)
threeD.innerHTML = helper(threeDServices)

if (document.getElementById('descModal')) {
  descModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const desc = button.getAttribute('data-bs-desc')
    const title = button.getAttribute('data-bs-title')
    const variation = button.getAttribute('data-bs-variation') || ''
    const varOps = button.getAttribute('data-bs-varops') || ''
    const modalBodyInput = descModal.querySelector('.modal-body')
    const modalTitle = descModal.querySelector('.modal-title')
    modalBodyInput.innerHTML = `${desc}${variation}${varOps}`
    modalTitle.innerHTML = title
  })
}