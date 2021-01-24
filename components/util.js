const formatNumber = (number) => {
    return number < 9 ? `0${number}` : number
}

export const formatTime = (time) => {
    let remainMiniseconds = time % 100
    let seconds = (time - remainMiniseconds) / 100

    let remainSeconds = seconds % 60
    let minutes = (seconds - remainSeconds) / 60

    let remainMinutes = minutes % 60
    let hours = (minutes - remainMinutes) / 60

    return `${formatNumber(hours)}:${formatNumber(remainMinutes)}:${formatNumber(remainSeconds)},${formatNumber(remainMiniseconds)}`
}