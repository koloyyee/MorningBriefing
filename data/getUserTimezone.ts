// Get user current timezone

export default function getCity(): void | string {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const re = /([^\/]+$)/g
    const uncleanedCity = re.exec(tz)
    if (uncleanedCity && uncleanedCity.length) {
        const city = uncleanedCity[0].replace("_", " ")
        return city

    }
}

