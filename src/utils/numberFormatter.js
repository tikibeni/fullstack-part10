export const numberCruncher = num => {
    const crunch = num / 1000
    if (crunch > 1) return Math.round(crunch * 10) / 10 + 'k'
    return num
}
