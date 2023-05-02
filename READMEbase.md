# MERN-base-proyect
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

## prerequisites
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

> Disclaimer: The React application works with Node.js 16 and below.
## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI (get it from your own created cluster), should look like this:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```
