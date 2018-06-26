<img align="right" width="150" src="https://github.com/scbowler/react-php/blob/master/public/php-react.png">

# PHP React Starter 

> This repo contains boilerplate code to aid in the creation of a new React app with Redux and a PHP back-end. Follow the below setup instructions to get started.

### Setup Instructions

> 1. Fork this repo
> 1. Clone your forked copy of this repo
>    - `git clone https://github.com/[Your Username]/react-php.git`
> 1. Change directory into the newly cloned repo
>    - `cd react-php`
> 1. Install dependencies 
>    - `npm install`
> 1. Use MAMP or similar program to start an Apache server
>    - Set root directory of server to the `public` folder of this project
>    - Set Apache port to `8000`
> 1. Start dev server
>    - `npm start`
> 1. Open a browser and navigate to `localhost:3000` You should see an empty to do list.

### Bundle For Deployment

> 1. Run webpack to bundle files
>    - `npm run bundle`
> 
> **NOTE:** *After bundling you can not directly run your app locally. You must run your app from the root directory of a server.*
