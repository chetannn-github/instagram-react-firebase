# Instagram Clone
 ## A React-based Instagram clone with Firebase authentication, Google OAuth, and Firebase database, storage, and Tailwind CSS for styling.

### Auth Page
![Preview Image 1](/public/preview/preview0.png)

### Feed (Desktop )
![Preview Image 2](/public/preview/preview1.png)

### Feed (Tabs )
![Preview Image 3](/public/preview/preview2.png)

### Search
![Preview Image 4](/public/preview/preview3.png)

### Create Post
![Preview Image 5](/public/preview/preview4.png)
###  Profile
![Preview Image 5](/public/preview/preview5.png)


## Features


### v1.0

* **Authentication**
* **Create Post**
* **Like Post**
* **Delete Post**
* **Update Profile**
* **Suggest Users**
* **Search Users**
* **Follow/Unfollow User**
* **Image Popup at Profile**
## Roadmap
----------

### v2.0

* **Username Validation**
* **Comment System**
* **Followers and Followings List**
* **List  Saved and Liked Post**
* **Update Password**


### v3.0

* **Chat Messages**
* **Reels**
* **Public & Private Account**
* **Story**
## Tech Stack
-------------

* React
* Firebase
	+ Authentication
	+ Database
	+ Storage
* Tailwind CSS
* React Router DOM
* React-Hot-Toast

## Getting Started
---------------


### Setup firebase.js file

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: ,
  authDomain:,
  projectId:,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: 
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
export {firestore, storage};




```

### Install dependencies

```shell
npm install
```

### Start the app

```shell
npm run dev
```


## Contributing
------------

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Acknowledgments
---------------

* Firebase for providing an amazing platform for building web applications
* Tailwind CSS for making styling a breeze
* React Router DOM for simplifying client-side routing
* React-Hot-Toast for providing a simple and customizable notification system
