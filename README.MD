# PhotoGalleryDesktop

Angular is a framework which allows you to create reactive single page application.  It's only one Html file and a bunch of code we got from the server and every change is rendered in the browser. Angular 5 currently is the latest version. 

## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/en/)

We need  node.js to build our project and to manage dependencies, the packages we use and it also spins up a little development server which will host our app on our local machine making to easy for us to test it. 

So make sure to download the lastest version of nodejs year simply dowload it and go from installer should be very straight forward.

In case you're not with the latest version of npm:
```sh
 npm install npm -g  
```

######Once you are done we need to install angular CLI 
We simply need node.js because the CLI needs it. Behind the scenes it does some things with it to build our project and to manage our dependencies and the packages we use like the angular framework itself.

why we use CLI and not just import the angular to framework in an existing index HVM  page?

Angular is very futuristic framework and therefore it uses features like typescript which is 
a superset  of javascript which needs to be compiled before it runs in the browser so it has some extra steps we have to take into account during development and doing that manually can't really be a pain. That's why the CLI it is really an awesome solution (the CLI also is a great tool for big and very big Angular projects! It allows you to focus on Angular code instead of workflow tasks!)

##### So we will need simply run the following command to global install CLI in your machine (after you install node.js that's important on your machine).
```sh
npm install -g @angular/cli
```
what this will do is it will build all our source code as or uses typescript which needs to be compiled to javascript.

######Once you clone this repository, run this command on your terminal to install all needed dependencies:
## Install NPM Dependencies

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
![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryDesktop/master/src/assets/picture1.PNG?token=AQnl8Tm1Yl78eJmsH-XCxL0qttS-HEtHks5avSCYwA%3D%3D)
__________________________________________________________________________________________________________________

![alt tag](https://raw.githubusercontent.com/jesuiselle/PhotoGalleryDesktop/master/src/assets/picture2.PNG?token=AQnl8Tm1Yl78eJmsH-XCxL0qttS-HEtHks5avSCYwA%3D%3D)
