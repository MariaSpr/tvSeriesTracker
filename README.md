# tvSeriesTracker using React-Native 

Keep track of your favorite tv shows and watchlist. The app is built using
[TMDB-API](https://www.themoviedb.org/documentation/api)

# Installation

#### Requirements
tvSeriesTracker was build using:
- [Node](https://nodejs.org/) v.8.11.1
- [npm](https://www.npmjs.com/) v.6.1.0
- [react-native-cli](https://github.com/facebook/react-native/tree/master/react-native-cli) v.2.0.1
- Android 8.0.0 Oreo

 ## 1. Clone This Repository
 ```sh
$ git clone https://github.com/MariaSpr/tvSeriesTracker
```

## 2. Install react-native-cli globally to be able to run react-native.

```sh
$ npm install -g react-native-cli
```
## 3. Install dependencies

```sh
$ cd tvSeriestracker
$ npm install
```

After this you should have these dependencies in your `package.json ` file

```javascript
 "dependencies": {
    "axios": "^0.18.0",
    "firebase": "^5.0.4",
    "native-base": "^2.5.2",
    "react": "16.3.1",
    "react-native": "0.55.4",
    "react-navigation": "^2.3.1"
  }
```

## 4. Build and Run for Android

```sh
$ react-native run-android
```


# ScreenShots

![login-signup](https://user-images.githubusercontent.com/15072613/41812877-11ebd916-7734-11e8-8cf3-5c949ae48c3a.png)

If there is not account with the credentials provided then a new user is being signed up and a new account is created.


![explore](https://user-images.githubusercontent.com/15072613/41812896-665ec562-7734-11e8-98c5-21cde999627f.png)

In the explore tab users can discover new series

![add-to-watchlist](https://user-images.githubusercontent.com/15072613/41812912-9428cf56-7734-11e8-9d63-71deef996e5c.png)

User can view more details about a show and add it to the user's watchlist

![watchlist](https://user-images.githubusercontent.com/15072613/41812919-a897e6c0-7734-11e8-95e8-f94f78a53c41.png)


![drawer](https://user-images.githubusercontent.com/15072613/41812923-b8e2e3d6-7734-11e8-9ddf-2ad08c70b8c2.png)

Drawer navigation to go to Profile Screen

![sign-out](https://user-images.githubusercontent.com/15072613/41812957-1e1692c0-7735-11e8-91da-0a4dabd632ba.png)

Profile screen to sign out


