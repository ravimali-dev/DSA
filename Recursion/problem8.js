
let s = "hello"

function str(s) {
    if (s.length === 1) {
        return s;
    }

    return str(s.slice(1)) + s[0]
}

console.log(str(s))