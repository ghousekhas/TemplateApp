# Template App
This is just a blank expo-react-native-app with most dependencies in package.json easy to set up

## Installation

First off, have nodejs and npm installed from their [official website](https://nodejs.org/en/)

Navigate into the folder containing this repo then run (in bash/commandpromt)

```bash
npm install -g expo-cli
npm install --save
expo start
```

## Usage

Just after running expo start you'll probably be greeted by a browser launch.
Make sure your phone's connected to the same wireless network, [install expo on your phone from the playstore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)
Scan the QR code in the browser and voila!

```javascript
I guess we'll be discussing this 0.o
```

# Troubleshooting

It's a little too early for troubleshooting. Isn't it? 

Anyway if expo start throws an error which says module not found

Try

```bash
npm install -g expo-cli --force
npm install --save
expo start
```

Make sure you give Nodejs access to your network. (Windows defender will surely come in your way)
