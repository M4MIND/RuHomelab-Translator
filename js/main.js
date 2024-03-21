const m = {
    "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г", "i": "ш", "o": "щ", "p": "з",
    "[": "х", "]": "ъ", "a": "ф", "s": "ы", "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л",
    "l": "д", ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и", "n": "т", "m": "ь",
    ",": "б", ".": "ю", "/": ".", "Q": "Й", "W": "Ц", "E": "У", "R": "К", "T": "Е", "Y": "Н", "U": "Г",
    "I": "Ш", "O": "Щ", "P": "З", "{": "Х", "}": "Ъ", "A": "Ф", "S": "Ы", "D": "В", "F": "А", "G": "П",
    "H": "Р", "J": "О", "K": "Л", "L": "Д", ":": "Ж", "\"": "Э", "|": "/", "Z": "Я", "X": "Ч", "C": "С",
    "V": "М", "B": "И", "N": "Т", "M": "Ь", "<": "Б", ">": "Ю", "?": ",", "й": "q", "ц": "w", "у": "e",
    "к": "r", "е": "t", "н": "y", "г": "u", "ш": "i", "щ": "o", "з": "p", "х": "[", "ъ": "]", "ф": "a",
    "ы": "s", "в": "d", "а": "f", "п": "g", "р": "h", "о": "j", "л": "k", "д": "l", "ж": ";", "э": "'",
    "я": "z", "ч": "x", "с": "c", "м": "v", "и": "b", "т": "n", "ь": "m", "б": ",", "ю": ".", ".": "/",
    "Й": "Q", "Ц": "W", "У": "E", "К": "R", "Е": "T", "Н": "Y", "Г": "U", "Ш": "I", "Щ": "O", "З": "P",
    "Х": "{", "Ъ": "}", "Ф": "A", "Ы": "S", "В": "D", "А": "F", "П": "G", "Р": "H", "О": "J", "Л": "K",
    "Д": "L", "Ж": ":", "Э": "\"", "/": "|", "Я": "Z", "Ч": "X", "С": "C", "М": "V", "И": "B", "Т": "N",
    "Ь": "M", "Б": "<", "Ю": ">", "ё": "`", "Ё": "~", "`": "ё", "~": "Ё",
};

document.getElementById("copy").addEventListener('click', function (e) {
    const str = document.getElementById('out').value;
    navigator.clipboard.writeText(str).then(e => {
        document.getElementById("spn").innerHTML = "Скопировано!"
    }).catch(e => {
        document.getElementById("spn").innerHTML = "Ошибка при копировании!"
    })

    setTimeout(function () {
        document.getElementById("spn").innerHTML = "&#128203";
    }, 2000);
})

document.getElementById("src").addEventListener("input", function (e) {
    const str = e.target.value;
    let result = "";

    for (i = 0; i < str.length; i++) {
        if (m[str[i]] !== undefined) {
            result += m[str[i]]
        } else {
            result += str[i]
        }
    }

    document.getElementById("out").value = result
})