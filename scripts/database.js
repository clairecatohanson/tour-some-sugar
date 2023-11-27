const database = {
    bookings: [
        { id: 1, venueId: 1, bandId: 3, date: "11/25/2023" },
        { id: 2, venueId: 3, bandId: 6, date: "11/25/2023" },
        { id: 3, venueId: 5, bandId: 8, date: "11/25/2023" },
        { id: 4, venueId: 4, bandId: 1, date: "11/25/2023" },
        { id: 5, venueId: 3, bandId: 6, date: "12/02/2023" },
        { id: 6, venueId: 2, bandId: 5, date: "12/02/2023" },
        { id: 7, venueId: 5, bandId: 4, date: "12/02/2023" },
        { id: 8, venueId: 2, bandId: 2, date: "12/02/2023" },
        { id: 9, venueId: 1, bandId: 2, date: "12/09/2023" },
        { id: 10, venueId: 5, bandId: 5, date: "12/09/2023" },
        { id: 11, venueId: 2, bandId: 3, date: "12/09/2023" },
        { id: 12, venueId: 4, bandId: 7, date: "12/09/2023" },
        { id: 13, venueId: 1, bandId: 6, date: "12/16/2023" },
        { id: 14, venueId: 4, bandId: 3, date: "12/16/2023" },
        { id: 15, venueId: 3, bandId: 7, date: "12/16/2023" },
        { id: 16, venueId: 5, bandId: 2, date: "12/16/2023" },
        { id: 17, venueId: 3, bandId: 3, date: "12/23/2023" },
        { id: 18, venueId: 2, bandId: 5, date: "12/23/2023" },
        { id: 19, venueId: 4, bandId: 1, date: "12/23/2023" },
        { id: 20, venueId: 5, bandId: 2, date: "12/23/2023" },
        { id: 21, venueId: 2, bandId: 7, date: "12/30/2023" },
        { id: 22, venueId: 5, bandId: 5, date: "12/30/2023" },
        { id: 23, venueId: 1, bandId: 6, date: "12/30/2023" },
        { id: 24, venueId: 3, bandId: 8, date: "12/30/2023" },
    ],
    venues: [
        { id: 1, name: "Bluebird Cafe", address: "4104 Hillsboro Pike, Nashville, TN 37215", sqft: 1800, occupancy: 90 },
        { id: 2, name: "EXIT/IN", address: "2208 Elliston Place, Nashville, TN 37203", sqft: 10000, occupancy: 500 },
        { id: 3, name: "The Basement East", address: "917 Woodland Street, Nashville, TN 37206", sqft: 12000, occupancy: 575 },
        { id: 4, name: "3rd and Lindsley", address: "818 3rd Ave S, Nashville, TN 37210", sqft: 20000, occupancy: 700 },
        { id: 5, name: "Mercy Lounge", address: "1 Cannery Row, Nashville, TN 37203", sqft: 9900, occupancy: 500 },
    ],
    bands: [
        { id: 1, name: "Radiohead", members: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"], genre: ["Art Rock", "Alternative Rock", "Electronica"], year: 1985 },
        { id: 2, name: "NxWorries", members: ["Anderson .Paak", "Knxwledge"], genre: ["Hip Hop", "Hip Hop Soul", "R&B", "Neo Soul"], year: 2015 },
        { id: 3, name: "Fleet Foxes", members: ["Robin Pecknold", "Skyler Skjelset", "Casey Wescott", "Christian Wargo", "Morgan Henderson"], genre: ["Indie Folk", "Folk Rock", "Progressive Folk"], year: 2006 },
        { id: 4, name: "Run the Jewels", members: ["El-P", "Killer Mike"], genre: ["Hip Hop"], year: 2013 },
        { id: 5, name: "LCD Soundsystem", members: ["James Murphy", "Nancy Whang", "Pat Mahoney", "Tyler Pope", "Al Doyle", "Korey Richey"], genre: ["Electronic Rock", "Indie Rock", "Art Rock", "Alternative Dance"], year: 2002 },
        { id: 6, name: "Alabama Shakes", members: ["Brittany Howard", "Zac Cockrell", "Heath Fogg", "Steve Johnson"], genre: ["Blues Rocks", "Southern Rock", "Soul"], year: 2009 },
        { id: 7, name: "Tame Impala", members: ["Kevin Parker"], genre: ["Psychedelic Pop", "Psychedelic Rock", "Indie Rock", "Synth Pop"], year: 2007 },
        { id: 8, name: "Silk Sonic", members: ["Bruno Mars", "Anderson .Paak"], genre: ["R&B", "Soul", "Funk", "Pop"], year: 2020 },
    ],
    bandMembers: [
        { id: 1, firstName: "Thom", lastName: "Yorke", yearBorn: "1968", role: "vocals, guitar, keyboard", bandId: 1 },
        { id: 2, firstName: "Johnny", lastName: "Greenwood", yearBorn: "1971", role: "guitar, keyboard", bandId: 1 },
        { id: 3, firstName: "Colin", lastName: "Greenwood", yearBorn: "1969", role: "bass guitar, electronic instruments", bandId: 1 },
        { id: 4, firstName: "Ed", lastName: "O'Brien", yearBorn: "1968", role: "guitars, vocals", bandId: 1 },
        { id: 5, firstName: "Philip", lastName: "Selway", yearBorn: "1967", role: "drums", bandId: 1 },
        { id: 6, firstName: "Anderson .Paak", lastName: "", yearBorn: "1986", role: "vocals", bandId: 2 },
        { id: 7, firstName: "Knxwledge", lastName: "", yearBorn: "1988", role: "producer", bandId: 2 },
        { id: 8, firstName: "Robin", lastName: "Pecknold", yearBorn: "1986", role: "vocals, guitar", bandId: 3 },
        { id: 9, firstName: "Skyler", lastName: "Skjelset", yearBorn: "1986", role: "guitar", bandId: 3 },
        { id: 10, firstName: "Casey", lastName: "Wescott", yearBorn: "1986", role: "keyboards, backing vocals", bandId: 3 },
        { id: 11, firstName: "Christian", lastName: "Wargo", yearBorn: "1986", role: "bass guitar, guitar, backing vocals", bandId: 3 },
        { id: 12, firstName: "Morgan", lastName: "Henderson", yearBorn: "1986", role: "bass, guitar, violin, percussion", bandId: 3 },
        { id: 13, firstName: "El-P", lastName: "", yearBorn: "1975", role: "rapper, producer", bandId: 4 },
        { id: 14, firstName: "Killer Mike", lastName: "", yearBorn: "1975", role: "rapper, producer", bandId: 4 },
        { id: 15, firstName: "James", lastName: "Murphy", yearBorn: "1970", role: "vocals, synths, guitar, bass guitar, drums, production", bandId: 5 },
        { id: 16, firstName: "Nancy", lastName: "Whang", yearBorn: "1977", role: "keyboards, synths, vocals", bandId: 5 },
        { id: 17, firstName: "Pat", lastName: "Mahoney", yearBorn: "1977", role: "drums, synths, backing vocals", bandId: 5 },
        { id: 18, firstName: "Tyler", lastName: "Pope", yearBorn: "1977", role: "bass guitar, guitar, synths", bandId: 5 },
        { id: 19, firstName: "Al", lastName: "Doyle", yearBorn: "1980", role: "guitar, percussion, synths, bass guitar, vocals", bandId: 5 },
        { id: 20, firstName: "Korey", lastName: "Richey", yearBorn: "1978", role: "percussion, synths, piano, backing vocals", bandId: 5 },
        { id: 21, firstName: "Brittany", lastName: "Howard", yearBorn: "1988", role: "vocals, guitar", bandId: 6 },
        { id: 22, firstName: "Zac", lastName: "Cockrell", yearBorn: "1988", role: "bass guitar", bandId: 6 },
        { id: 23, firstName: "Heath", lastName: "Fogg", yearBorn: "1984", role: "guitar, backing vocals", bandId: 6 },
        { id: 24, firstName: "Steve", lastName: "Johnson", yearBorn: "1985", role: "drums, backing vocals", bandId: 6 },
        { id: 25, firstName: "Kevin", lastName: "Parker", yearBorn: "1986", role: "vocals, instrumentals, production", bandId: 7 },
        { id: 26, firstName: "Bruno Mars", lastName: "", yearBorn: "1985", role: "vocals, production, guitar, piano", bandId: 8 },
        { id: 27, firstName: "Anderson .Paak", lastName: "", yearBorn: "1986", role: "vocals, production, drums", bandId: 8 },
    ]
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBandMembers = () => {
    return database.bandMembers.map(member => ({...member}))
}