import { getVenues, getBookings, getBands } from './database.js'

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    if (clickedEl.dataset.type === "venue") {
        const bandNames = []
        const venueId = parseInt(clickedEl.dataset.id)
        for (const booking of bookings) {
            if (venueId === booking.venueId) {
                for (const band of bands) {
                    if (booking.bandId === band.id) {
                        if (!bandNames.includes(band.name)) {
                            bandNames.push(band.name)
                        }
                    }
                }
            }
        }
        let bandsString = ''
        for (const name of bandNames) {
            bandsString += `${name}, `
        }
        const f_bandsString = bandsString.slice(0, -2)
        for (const venue of venues) {
            if (venue.id === venueId) {
                window.alert(`The following bands are currently booked at ${venue.name}:\n${f_bandsString}`)
            }
        }
    }
})

export const Venues = () => {
    let venuesHTML = '<ul>'
    const venues = getVenues()
    for (const venue of venues) {
        venuesHTML += `
            <li data-type="venue" data-id="${venue.id}">${venue.name}</li>
        `
    }
    venuesHTML += '</ul>'
    return venuesHTML
}