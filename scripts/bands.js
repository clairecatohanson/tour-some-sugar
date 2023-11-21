import { getBands, getBookings, getVenues } from './database.js'

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    if (clickedEl.dataset.type === "band") {
        const venueNames = []
        const bandId = parseInt(clickedEl.dataset.id)
        for (const booking of bookings) {
            if (bandId === booking.bandId) {
                for (const venue of venues) {
                    if (booking.venueId === venue.id) {
                        if (!venueNames.includes(venue.name)) {
                            venueNames.push(venue.name)
                        }
                    }
                }
            }
        }
        let venuesString = ''
        for (const name of venueNames) {
            venuesString += `${name}, `
        }
        const f_venuesString = venuesString.slice(0, -2)
        for (const band of bands) {
            if (band.id === bandId) {
                window.alert(`${band.name} is currently booked at the following venues:\n${f_venuesString}`)
            }
        }
    }

})

export const Bands = () => {
    let bandsHTML = '<ul>'
    const bands = getBands()
    for (const band of bands) {
        bandsHTML += `
            <li data-type="band" data-id="${band.id}">${band.name}</li>
        `
    }
    bandsHTML += '</ul>'
    return bandsHTML
}