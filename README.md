# react-on-gas
Boilerplate code and instructions to squeeze React.js applications onto Google Apps Scirpt Web Apps, with support for easily calling server-side GAS functions from the React frontend. 

____
# Instructions 

## Server Environment Setup
Copy and paste the `code.gs` file and the `index.html` file from "Gas Server Environment" into a new Google Apps Script project. 

## Development Environment Setup

### Run Some Commands 
Navigate to where your project will live and then run the following command, replacing "my-react-app" with whatever the name of your root folder will be: 
##
    npx create-react-app my-react-app
Then navigate into this new directory: 
## 
    cd my-react-app
and Download some packages: 
## 
    npm install --save-dev browserify browserify-shim babelify @babel/core @babel/cli @babel/preset-react @babel/preset-env
### Manually Edit and Add Some Files
First, overwrite the all of the files in "src" with the files in "dev_environment_src".

**Edit package.json** : Next, add all of the following properties to your package.json, carefully maintaining the proper JSON syntax of the surrounding properties. Alphabetically, this might go just above `"browserslist"`: 
```
"browserify": {
  "transform": [
    "browserify-shim"
  ]
},
"browserify-shim": {
  "react": "global:React",
  "react-dom": "global:ReactDOM"
}, 
```
Also in the package.json file, add the following property under "scripts". 
```
"export": "browserify ./src/index.js -t [ babelify --presets @babel/preset-env --presets @babel/preset-react ] -x react -x react-dom -x ./src/mock_gas.js -x ./src/index.css -o ./output.js"
```
Then, create a file in the root directory called `.babelrc` file with the following content:
```
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "esmodules": true
      }
    }],
    "@babel/preset-react"
  ]
}

```
Finally, create an empty file called `output.js` in this same root directory. 

