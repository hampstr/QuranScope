
let select = document.getElementById('selectContainer')
let selectionType = document.getElementById('selectionType')
let currentInput;
let currentPage;
let pageViewContainer = document.getElementById('pageViewContainer')
let previousButton;
let nextButton;

const surahs = {
    1: ["Al-Fatihah", 1],
    2: ["Al-Baqarah", 2],
    3: ["Aal-E-Imran", 50],
    4: ["An-Nisa", 77],
    5: ["Al-Ma'idah", 106],
    6: ["Al-An'am", 128],
    7: ["Al-A'raf", 151],
    8: ["Al-Anfal", 177],
    9: ["At-Tawbah", 187],
    10: ["Yunus", 208],
    11: ["Hud", 221],
    12: ["Yusuf", 235],
    13: ["Ar-Ra'd", 249],
    14: ["Ibrahim", 255],
    15: ["Al-Hijr", 262],
    16: ["An-Nahl", 267],
    17: ["Al-Isra", 282],
    18: ["Al-Kahf", 293],
    19: ["Maryam", 305],
    20: ["Taha", 312],
    21: ["Al-Anbiya", 322],
    22: ["Al-Hajj", 332],
    23: ["Al-Mu'minun", 342],
    24: ["An-Nur", 350],
    25: ["Al-Furqan", 359],
    26: ["Ash-Shu'ara", 367],
    27: ["An-Naml", 377],
    28: ["Al-Qasas", 385],
    29: ["Al-Ankabut", 396],
    30: ["Ar-Rum", 404],
    31: ["Luqman", 411],
    32: ["As-Sajda", 415],
    33: ["Al-Ahzab", 418],
    34: ["Saba", 428],
    35: ["Fatir", 434],
    36: ["Ya-Sin", 440],
    37: ["As-Saffat", 446],
    38: ["Sad", 453],
    39: ["Az-Zumar", 458],
    40: ["Ghafir", 467],
    41: ["Fussilat", 477],
    42: ["Ash-Shura", 483],
    43: ["Az-Zukhruf", 489],
    44: ["Ad-Dukhan", 496],
    45: ["Al-Jathiya", 499],
    46: ["Al-Ahqaf", 502],
    47: ["Muhammad", 507],
    48: ["Al-Fath", 511],
    49: ["Al-Hujurat", 515],
    50: ["Qaf", 518],
    51: ["Adh-Dhariyat", 520],
    52: ["At-Tur", 523],
    53: ["An-Najm", 526],
    54: ["Al-Qamar", 528],
    55: ["Ar-Rahman", 531],
    56: ["Al-Waqia", 534],
    57: ["Al-Hadid", 537],
    58: ["Al-Mujadila", 542],
    59: ["Al-Hashr", 545],
    60: ["Al-Mumtahina", 549],
    61: ["As-Saff", 551],
    62: ["Al-Jumu'a", 553],
    63: ["Al-Munafiqun", 554],
    64: ["At-Taghabun", 556],
    65: ["At-Talaq", 558],
    66: ["At-Tahrim", 560],
    67: ["Al-Mulk", 562],
    68: ["Al-Qalam", 564],
    69: ["Al-Haqqa", 566],
    70: ["Al-Ma'arij", 568],
    71: ["Nuh", 570],
    72: ["Al-Jinn", 572],
    73: ["Al-Muzzammil", 574],
    74: ["Al-Muddathir", 575],
    75: ["Al-Qiyama", 577],
    76: ["Al-Insan", 578],
    77: ["Al-Mursalat", 580],
    78: ["An-Naba", 582],
    79: ["An-Nazi'at", 583],
    80: ["Abasa", 585],
    81: ["At-Takwir", 586],
    82: ["Al-Infitar", 587],
    83: ["Al-Mutaffifin", 587],
    84: ["Al-Inshiqaq", 589],
    85: ["Al-Buruj", 590],
    86: ["At-Tariq", 591],
    87: ["Al-A'la", 591],
    88: ["Al-Ghashiya", 592],
    89: ["Al-Fajr", 593],
    90: ["Al-Balad", 594],
    91: ["Ash-Shams", 595],
    92: ["Al-Lail", 595],
    93: ["Ad-Duhaa", 596],
    94: ["Ash-Sharh", 596],
    95: ["At-Tin", 597],
    96: ["Al-Alaq", 597],
    97: ["Al-Qadr", 598],
    98: ["Al-Bayyina", 598],
    99: ["Az-Zalzala", 599],
    100: ["Al-Adiyat", 599],
    101: ["Al-Qari'a", 600],
    102: ["At-Takathur", 600],
    103: ["Al-Asr", 601],
    104: ["Al-Humaza", 601],
    105: ["Al-Fil", 601],
    106: ["Quraish", 602],
    107: ["Al-Ma'un", 602],
    108: ["Al-Kawthar", 602],
    109: ["Al-Kafiroon", 603],
    110: ["An-Nasr", 603],
    111: ["Al-Masad", 603],
    112: ["Al-Ikhlas", 604],
    113: ["Al-Falaq", 604],
    114: ["An-Nas", 604]
};
updateSelect()

function getControlButtons() {
    previousButton = document.getElementById("previousButton");
    nextButton = document.getElementById("nextButton");
    previousButton.addEventListener('click', () => {
        currentPage--
        console.log("previousButton clicked")
        updatePage()
    })
    nextButton.addEventListener('click', () => {
        currentPage++
        console.log("nextButton clicked")
        updatePage()
    })
}

function updateControlButtons() {
    previousButton.disabled = false
    nextButton.disabled = false
    if (currentPage == 1) {
        previousButton.disabled = true;
    }
    if (currentPage == 604) {
        nextButton.disabled = true;
    }
    
}

selectionType.addEventListener('change', () => {
    let selectedValue = selectionType.value 
    console.log(selectedValue)
    updateSelect()
})

function getCurrentPage() {
    if (currentInput.id == "pageInput") {
        currentPage = currentInput.value
    }
    if (currentInput.id == "surahSelect") {
        currentPage = surahs[currentInput.value][1]
    }
    if (currentInput.id == "numberInput") {
        currentPage = currentInput.value
    }
}

function updateSelect() {
    select.innerHTML = ""
    if (selectionType.value == "page") {
        let pageInput = document.createElement("input")
        pageInput.id = "pageInput"
        pageInput.type = "number"
        pageInput.min = 1
        pageInput.max = 604
        pageInput.placeholder = "Enter a page number here..."
        select.appendChild(pageInput)
        pageInput.addEventListener("change", () => {
            getCurrentPage()
            updatePage()
        })
        currentInput = pageInput
    }

    if (selectionType.value == "surah") {
        
        let surahSelect = document.createElement("select")
        surahSelect.id = "surahSelect"

        for (let i = 1; i <= 114; i++) {
            let option = document.createElement("option")
            option.value = i
            option.innerText = surahs[i][0]
            surahSelect.appendChild(option)
        }
        select.appendChild(surahSelect)
        surahSelect.addEventListener("change", () => {
            getCurrentPage()
            updatePage()
        })
        currentInput = surahSelect
    }

    if (selectionType.value == "surahNumber") {
        let numberInput = document.createElement("input")
        numberInput.id = "numberInput"
        numberInput.type = "number"
        numberInput.min = 1
        numberInput.max = 604
        numberInput.placeholder = "Enter a surah number here..."
        select.appendChild(numberInput)
        numberInput.addEventListener("change", () => {
            getCurrentPage()
            updatePage()
        })
        currentInput = numberInput
    }
}



function updatePage() {
    pageViewContainer.innerHTML = ""
    let surahNumber = document.createElement("h2")
    surahNumber.innerText = `Surah ${surahs[currentPage][0]} (${surahs[currentPage][1]}), Page number ${currentPage}`
    pageViewContainer.appendChild(surahNumber)
    let buttonsContainer = document.createElement("div")    
    let previousButton = document.createElement("button")
    previousButton.innerText = "<"
    previousButton.id = "previousButton"
    let nextButton = document.createElement("button")
    nextButton.innerText = ">"
    nextButton.id = "nextButton"
    buttonsContainer.appendChild(previousButton)
    buttonsContainer.appendChild(nextButton)
    buttonsContainer.id = "buttonsContainer"
    let page = document.createElement("img")
    page.src = `fullQuran/${currentPage}.jpg`
    page.alt = `Page ${currentPage}`
    page.id="currentPage"
    pageViewContainer.appendChild(page)
    pageViewContainer.appendChild(buttonsContainer)
    getControlButtons()
    updateControlButtons()
}