# Intro to React 

## Setup for Demo

Either install nvm or node version 14.18+, 16+.

### Install Nvm

#### MacOS/Linux

To install or update nvm, run the install script for nvm located [here](https://github.com/nvm-sh/nvm/blob/v0.39.2/install.sh) or using the following commands. 

```
curl -o- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
```
wget -qO- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

If you have troubleshooting issues, check out the [github repo](https://github.com/nvm-sh/nvm#troubleshooting-on-linux) for nvm.

#### Windows 

To install nvm on Windows, download the installer [here](https://github.com/coreybutler/nvm-windows/releases).

If you have issues or need more info, check out the [github repo](https://github.com/coreybutler/nvm-windows) for nvm-windows.

### Install node

We can to install the latest version of node and make sure we use it.

```
nvm install 18
nvm use 18
node --version
```

## React Demo

This repo contains starter code (with some CSS formatting and the file structure) and the finished code from the demo. Take a peek or try running it locally by running a few commands below. 

```
git clone https://github.com/arelthia/intro-to-react
cd intro-to-react
cd my-starter-app
npm install
npm start
```

## If you want to build an app from scratch

Run the [create vite](https://vitejs.dev/)

Run the command below.
```
npm create vite@latest

```
Then follow the prompts

    - Type the project-name
    - Select React as the framework
    - Select Javascript as the variant

3. Cd into the project directory, run `npm install`, and then `npm run dev`.
4. View the app in the browser at http://localhost:5173/ 


[npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) are separate node package managers that helps you install dependencies, test, run, and build your app. You can use either one as long as you stick with one.


### Check your starter app

If you open [http://localhost:5173](http://localhost:5173), you should see the starter app running from the `vite` command.


## Free React Resources
Check some of these out if you want to learn more about React:
- [React Tutorial (docs)](https://react.dev/learn/tutorial-tic-tac-toe)
- [Learn React With This One Project](https://www.youtube.com/watch?v=Rh3tobg7hEo)
- [React with A Framework](https://www.youtube.com/watch?v=TJQbDPGzm0Y)

