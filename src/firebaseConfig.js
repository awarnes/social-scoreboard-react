import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDRoWGomfl_iPhY08KYpyXUKl0_alaewe0',
  authDomain: 'social-scoreboard.firebaseapp.com',
  databaseURL: 'https://social-scoreboard.firebaseio.com',
  storageBucket: 'social-scoreboard.appspot.com'
}

const fire = firebase.initializeApp(config)

export default fire
