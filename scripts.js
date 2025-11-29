const repairBio = document.getElementById('repair-bio')
const musicBio = document.getElementById('music-bio')
const tagLine = document.getElementsByClassName('sub-text')[0]

const fluteServc = document.getElementById('fluteServc')
const oboeServc = document.getElementById('oboeServc')
const bassoonServc = document.getElementById('bassoonServc')
const clarinetServc = document.getElementById('clarinetServc')
const otherServc = document.getElementById('otherServc')
const threeD = document.getElementById('threeD')

const REPAD = 'Repad'
const OIL_AND_ADJUST = 'Oil and adjust'
const CLEAN_AND_ADJUST = 'Clean and adjust'
const ULTRASONIC_CLEAN_AND_ADJUST_PLASTIC = 'Ultrasonic clean and adjust (plastic only)'
const ULTRASONIC_CLEAN_AND_ADJUST = 'Ultrasonic clean and adjust'

const helper = (arr) => arr.reduce((acc, item) => {
    acc = `${acc}<li>${item}</li>`
    return acc
}, '')

repairBio.textContent = "Chris studied under Rod Siljenberg and graduated with honors from the Western Iowa Tech band instrument repair program in Souix City, Iowa. He also received the honor of being chosen as the first ever repair student to intern with the local repair shop at Midbell music. For the next ten years he lived in Maryland as the clarinet and double reed repair specialist for the largest single store musical instrument retailer Chuck Levin\'s Washington Music Center. At Chuck\'s he routinely worked on instruments used by all of the military bands in the area including The President\'s Own Marine Band."

musicBio.textContent = "Chris attended The Florida State University and studied classical saxophone with Pat Meighan, and Jon Bergeron (now at Northern Arizona University). He then joined the navy as a woodwind instrumentalist (clarinet and saxophone) where he was stationed in Naples, Italy with the 6th fleet band (now the Naval Forces Europe band), and while in Naples he also had the honor of occasionally playing with the NATO band. After a brief hiatus from instrumental music and a move to Brooklyn, now Chris is overjoyed to play with/have played with several local New York community ensembles such as the Brooklyn Symphony Orchestra, Brooklyn Wind Symphony, Jackson Heights Orchestra, Manhattan Wind Ensemble, and the Press Start Orchestra (just to name a few!)"

tagLine.innerHTML = 'The rehearsal time, <i>anti</i>-squeezing, <i>anti</i>-squeaking, <i>anti</i>-stand-partner-side-eye so you can play your best repair service.'

const fluteServices = [
    REPAD,
    OIL_AND_ADJUST,
    CLEAN_AND_ADJUST,
    ULTRASONIC_CLEAN_AND_ADJUST,
    'Head cork replacement',
    'Minor dent work',
]
const oboeServices = [
    REPAD,
    OIL_AND_ADJUST,
    CLEAN_AND_ADJUST,
    ULTRASONIC_CLEAN_AND_ADJUST_PLASTIC,
    'Bocal cleaning and minor dent repair',
    'Tenon cork replacement',
]
const bassoonServices = [
    REPAD,
    OIL_AND_ADJUST,
    CLEAN_AND_ADJUST,
    'Bocal cleaning and minor dent repair',
    'Tenon material replacement (string/cork/synthetic)',
]
const clarinetServices = [
    REPAD,
    OIL_AND_ADJUST,
    CLEAN_AND_ADJUST,
    ULTRASONIC_CLEAN_AND_ADJUST_PLASTIC,
    'Tenon cork replacement',
    'Neck cleaning and minor dent repair'
]
const otherServices = [
    'UltraSonic cleaning: Any woodwind mouthpiece',
    'UltraSonic cleaning: Any brass mouthpiece',
    'Case cleaning and repair',
    'Reach out and ask!'
]
const threeDServices = [
    'Coming soon...'
]


fluteServc.innerHTML = helper(fluteServices)
oboeServc.innerHTML = helper(oboeServices)
bassoonServc.innerHTML = helper(bassoonServices)
clarinetServc.innerHTML = helper(clarinetServices)
otherServc.innerHTML = helper(otherServices)
threeD.innerHTML = helper(threeDServices)