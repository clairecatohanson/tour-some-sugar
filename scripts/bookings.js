import { getBookings, getBands, getVenues } from './database.js'

const bookings = getBookings()
const bands = getBands()

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    if (clickedEl.dataset.type === "booking") {
        const bookingId = parseInt(clickedEl.dataset.id)
        const bandId = parseInt(clickedEl.dataset.bandid)
        let bandName = ''
        let bandMembers = []
        let bandGenres = []
        let bandYear = ''
        for (const band of bands) {
            if (band.id === bandId) {
                bandName = band.name
                bandMembers = band.members
                bandGenres = band.genre
                bandYear = band.year
            }
        }
        let membersString = ''
        for (const member of bandMembers) {
            membersString += `${member}, `
        }
        const f_membersString = membersString.slice(0, -2)
        let genresString = ''
        for (const genre of bandGenres) {
            genresString += `${genre}, `
        }
        const f_genresString = genresString.slice(0, -2)
        for (const booking of bookings) {
            if (bookingId === booking.id) {
                window.alert(`${bandName}\nGenres: ${f_genresString}\nFormed in ${bandYear}\nBand Members: ${f_membersString}`)
            }
        }
    }
})

export const Bookings = () => {
    let bookingsHTML = '<ul>'
    const bookings = getBookings()
    const bands = getBands()
    const venues = getVenues()

    for (const booking of bookings) {
        let bandName = ''
        let venueName = ''
        for (const band of bands) {
            if (band.id === booking.bandId) {
                bandName = band.name
            }
        }
        for (const venue of venues) {
            if (venue.id === booking.venueId) {
                venueName = venue.name
            }
        }
        bookingsHTML += `
            <li data-type="booking", data-id="${booking.id}" data-bandid="${booking.bandId}">${bandName} are playing at ${venueName} on ${booking.date}.</li>
        `
    }
    bookingsHTML += '</ul>'
    return bookingsHTML
}