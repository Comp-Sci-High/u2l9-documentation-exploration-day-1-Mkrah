// Async Functions with randomuser.me API
// ----------------------------------------------------

// Define a function called fetchUserData(url)
//    - It should take a URL as a parameter
//    - Use fetch() and await the response
//    - Convert the response to JSON
//    - Log out the JSON or specific info (like name or country)
// let requestURL = "https://randomuser.me/api/?results=8&"

async function fetchUserData(url){
    let response = await fetch(url)
    let actualData = await response.json()
    console.log(actualData)

    return actualData
}


// ----------------------------------------------------
// Create a variable for each request below (reqUrl1, reqUrl2, etc.)
// Then call your fetchUserData() function with each one.

// 1 URL to Get 8 Random Users
// Call the fetchUserData function with this URL
let reqUrl1 = "https://randomuser.me/api/?results=8"

fetchUserData(reqUrl1)


// 2 URL to Get a Random User from Poland
// Call the fetchUserData function with this URL

let reqUrl2 = "https://randomuser.me/api/?nat=CA"

fetchUserData(reqUrl2)



// 3 URL to Get a Random User that’s Male
// Call the fetchUserData function with this URL

let reqUrl3 = "https://randomuser.me/api/?gender=male"

fetchUserData(reqUrl3)


// 4 URL to Get a Random User while Excluding Their Email
// Call the fetchUserData function with this URL

let reqUrl4 = "https://randomuser.me/api/?exc=email"

fetchUserData(reqUrl4)

// 5 Get 5 Female Users from the Colombia
// Call the fetchUserData function with this URL

let reqUrl5 = "https://randomuser.me/api/results=5&gender=female&nat=FR"

fetchUserData(reqUrl5)

