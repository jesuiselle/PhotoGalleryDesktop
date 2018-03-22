# PhotoGalleryDesktop

## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/en/)

We need  node.js to build our project and to manage dependencies, the packages we use and it also spins up a little development server which will host our app on our local machine making to easy for us to test it. 

So make sure to download the lastest version of nodejs year simply dowload it and go from installer should be very straightforward.

In case you're not with the latest version of npm:
```sh
 npm install npm -g  
```

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies:
```sh
  npm install
```

Then install this plugin (it depends on Angular CDK for the lightbox feature, you don't need to import anything from the CDK, just make sure that it is installed in the project)
```sh
  npm install --save @angular/cdk ng-gallery
```

## Launching the App
#### After installing the needed dependencies you are done, so what you will see when you launch this app with the commande below:

```sh
  ng serve 
```
__________________________________________________________________________________________________________________
![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture1.PNG)
__________________________________________________________________________________________________________________

![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryMobile/master/src/assets/imgs/picture2.PNG)
