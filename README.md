## System requirements

1. sudo npm install -g reate-react-app
2. sudo npm install -g create-react-component
3. sudo npm install -g create-react-component-folder



## Steps to start creating a REACT app

1. to create a react app. run
```
create-react-app <app-name>
```
if the above command fails, then ```npm cache clean --force``` and run ```npx create-react-app <app-name>``` again.
```npx create-react-app <app-name>``` creates an npm initialized folder with package.json.


2. cd <app-name>.

3. webpack and webpack-dev-server installation
```
npm install webpack webpack-cli webpack-dev-server webpack-merge --save-dev
```

4. babel installations
```
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties --save-dev
```

5. There is no need to install react and react-dom as runing ```npx create-react-app <app-name>``` already installs react, react-dom.

6. To create react Components via terminal. reference https://www.npmjs.com/package/create-react-component-folder. There are 2 options
#### a) option-1: create-react-component(prefered for class based react components)
```
cd <destination>
create-react-component <component-name> --notest
```

#### b) option-2: create-react-component(prefered for stateless functional components)
```
create-react-component-folder <destination/component-name> --notest -j
or 
crcf <destination/component-name> --notest -j
```
#### Options:
    -V, --version     output the version number
    --typescript      Creates Typescript component and files
    --nocss           No css file
    --notest          No test file
    --cssmodules       Creates css/less/scss file with .module extensions. Example 
    --reactnative     Creates React Native components
    --createindex     Creates index.js file for multple component imports
    -f, --functional  Creates React stateless functional component
    -j, --jsx         Creates the component file with .jsx extension
    -l, --less        Adds .less file to component
    -s, --scss        Adds .scss file to component
    -p, --proptypes   Adds prop-types to component
    -u, --uppercase   Component files start on uppercase letter
    -h, --help        output usage information
    -sb, --stories    Add Storie file to component
    -ns, --nosemi     No semicolons
