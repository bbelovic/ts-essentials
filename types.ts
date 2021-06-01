function computeLength(x: string, y: string): number
function computeLength(x: any[], y: any[]): number
function computeLength(x: string | any[], y: string | any[]) {
    return x.length + y.length;
}

function checkLength(x: string): boolean {
    return x.length > 2
}

const strings = ["abc", "def", "xyz"]
const l = strings.filter(each => checkLength(each)).length

console.log(`l = ${l}`)