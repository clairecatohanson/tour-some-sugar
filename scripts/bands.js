import { getBands, getBookings, getVenues, getBandMembers } from './database.js'

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()
const bandMembers = getBandMembers()

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    if (clickedEl.dataset.type === "band") {
        const venueNames = []
        const bandMemberList = []
        const bandId = parseInt(clickedEl.dataset.id)
        for (const member of bandMembers) {
            if (member.bandId === bandId) {
                bandMemberList.push(member)
            }
        }
        
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
        let bandMemberString = ''
        for (const member of bandMemberList) {
            bandMemberString += `${member.firstName} ${member.lastName} (${member.role})\n`
        }
        
        let venuesString = ''
        for (const name of venueNames) {
            venuesString += `${name}\n`
        }

        for (const band of bands) {
            if (band.id === bandId) {
                window.alert(`${bandMemberString}\nUpcoming Shows:\n${venuesString}
                `)
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