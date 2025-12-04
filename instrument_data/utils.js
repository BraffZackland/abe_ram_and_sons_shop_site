export const handleDescription = (str) => `<p class='modal--desc'>${str}</p>`

export const handleVariation = (str) =>
    `<br><p class='modal--variation'><strong>Variation:</strong> ${str}</p>` 

export const handleList = (arr, className = '') => {
    const items = arr.reduce((acc, val) => `${acc}<li ${className && 'class="' + className + '"'}>${val}</li>`, '')
    return `<ul>${items}</ul>`
}

export const parseRaw = (desc) => {
    let item = '<li'
    if (!desc) return `${item}>`
    item = `<li data-bs-toggle="modal" data-bs-target="#descModal" data-bs-title="${desc.title}" data-bs-desc="${desc.description}${desc.ops}" `

    if (desc?.variation) {
        item = `${item} data-bs-variation="${desc.variation}" data-bs-varops="${desc.varOps}"`
    }
    return `${item}>`
}

export const helper = (arr) => arr.reduce((acc, {name, desc}) => {
    const li = !desc ? '<li>' : desc
    const service = !desc ? name : `<p class="with-desc">${name}</p>`
    return `${acc}${li}${service}</li>`
}, '')
