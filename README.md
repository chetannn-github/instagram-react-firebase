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

* **Authentication**:
	+ **Google OAuth**: Sign in with Google
	+ **Email and Password**: Sign in with email and password
* **Create Post**: Create and share posts with images and captions
* **Like Post**: Like and unlike posts
* **Delete Post**: Delete own posts
* **Update Profile**: Update profile information and profile picture

## Roadmap
----------

### v2.0

* **Username Validation**: Check for username already exists on updating username
* **Comment System**: Add comment and delete comment functionality
* **Followers and Followings List**: Show followers and followings list
* **Post Save and Like**: Save and show post liked and saved
* **Image Popup at Profile**: Image popup at profile
* **Update Password**: Update password functionality

### v3.0

* **Chat Messages**: Implement chat messaging system
* **Reels**: Add reels feature
* **Public & Private Account**: Implement public and private account feature
* **Story**: Add story feature

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