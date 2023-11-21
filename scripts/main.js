import { Bookings } from './bookings.js'
import { Venues } from './venues.js'
import { Bands } from './bands.js'

const domHTML = () => {
    let domString = `
    <h1>Tour Some Sugar On Me</h1>
    <article id="bookings" class="one-col section">
    <h2>Bookings</h2>
    ${Bookings()}
    </article>
    <div class="two-col-container">
    <article id="venues" class="two-col section">
        <h2>Venues</h2>
        ${Venues()}
    </article>
    <article id="bands" class="two-col section">
        <h2>Bands</h2>
        ${Bands()}
    </article>
    </div>
    `

    return domString
}

const containerEl = document.querySelector('.container')
containerEl.innerHTML = domHTML()
