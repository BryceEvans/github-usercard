/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get(`https://api.github.com/users/BryceEvans`)
  .then((res) => {
    // console.log(res)
    // console.log(res.data.name)
    // console.log(res.data)
    const myUserData = res.data
    // console.log("my user data: ", myUserData)
    cards.appendChild(cardMaker(myUserData))
    const myFollowers = res.data.followers_url
    console.log(myFollowers)
    axios
    .get(myFollowers)
    .then((res) => {
      // console.log(res.data)
      const myFollowersArray = res.data
      console.log("myFollowersArray:", myFollowersArray)
      myFollowersArray.forEach(function(follower) {
        cards.appendChild(cardMaker(follower))
      })
    })
    .catch((err) => {
      console.log('The second time you hit an error: ', err)
    })
  })
  .catch((err) => {
    console.log('You hit an error: ', err)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards')
console.log(cards)
// cards.appendChild(cardMaker(myUserData))

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardMaker(userObject) {

  // create the elements of the card
  const card = document.createElement('div')
  const image = document.createElement('img')
  const info = document.createElement('div')
  const header3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const anchor = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // add class names
  card.classList.add('card')
  info.classList.add('card-info')
  header3.classList.add('name')
  
  // add srcs
  image.src = userObject.avatar_url
  anchor.src = userObject.html_url

  // add textContent
  header3.textContent = userObject.name
  username.textContent = userObject.login
  location.textContent = "Location: " + userObject.location
  profile.textContent = "Profile:"
  anchor.textContent = userObject.html_url
  followers.textContent = "Followers: " + userObject.followers
  following.textContent = "Following: " + userObject.following
  bio.textContent = "Bio: " + userObject.bio

  // append items
  card.appendChild(image)
  card.appendChild(info)
  info.appendChild(header3)
  info.appendChild(username)
  info.appendChild(location)
  info.appendChild(profile)
  profile.appendChild(anchor)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)

  // return card
  return card

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
