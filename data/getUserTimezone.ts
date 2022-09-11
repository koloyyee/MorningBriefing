// Get user current timezone

export default function getCity(): string {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const re = /([^\/]+$)/g
    const uncleanedCity = re.exec(tz)[0]
    const city = uncleanedCity.replace("_", " ")
    return city
}

