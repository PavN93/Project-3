# Plantica

## Overview

From botanists to ecologists, hikers to hunters, the world is filled with likeminded nature enthusiasts wanting to record what we find. Plantica is a tool to help users research and record plant species, as well as offer information on different flora.

## Table of contents

- [About](#about)
  - [Built using](#built-using)
- [Link to application](#link-to-deployed-application)
- [Contributors](#contributors)
- [Initial Idea](#initial-idea)
- [Functionality](#functionality)
- [Installation](#installation)
- [Further Development](#further-development)
- [Updates](#updates)
- [Learning](#learning)
- [License](#license)

---

## About

There are few apps available at the moment that fulfil this requirement. There are some dummies guide for caring for house plants or identifying different plants by a photo targeted towards gardening enthusiasts. But nothing for those wanting a high level of detail.
Plantica will cater for botanists and nature enthusiasts who are interested in a variety of species and want to share their love of botany with others.

#### User story

**AS A** botanist and nature enthusiast,  
**I WANT** an application to research plants and save my own collections online,  
**SO THAT** I can keep track of my samples and learn more about the world of botany.

## Built using

- **React**
- **Node.js**
- **Express** for the server
- **MongoDB** for the database with **Mongoose** as the ORM
- **Semantic UI** as the CSS framework
- **JWT** for encryption
- **JOI** for data validation
- **.env** to protect API keys in Node with environment variables
- **Cloudinary** for image upload functionality
- **Trefle API** to retrieve plant data
- **Open Weather API** for location based weather data
- **Moment.js** for displaying dates and times
- **Framer Motion** for animation

---

## Link to deployed application

View the live application on [Heroku]().

---

## Contributors

- [Pawel Nawoj](https://github.com/PavN93)
- [Shivey Singh](https://github.com/genius-pending)
- [Hannah Sones](https://github.com/HannahSones)

---

## Initial Idea

Below is the initial wireframes for the design of the app. This developed over time as we added features and functionality and adapted styling to suit both desktop and mobile devices.

[ADD SCREENSHOTS OF APP SCREENS]()


We also developed a simple schema structure to create the database.
[ADD SCREENSHOTS OF SCHEMA]()

---

## Functionality

The functionality differs depending on if a user is logged in or not. To incentivise using the application, more features and functionality is available to those users who have an account.

1. Plantica homepage:

!Plantica Page](#)

    From the homepage all users are able to explore a range of plants using the search functionality with fetches data from the Trefle Api.
    There is also a 'Plant of the Day' feature which gives a random plant each day to users when clicked.

    If you are logged in you can then access a profile page, search for friends on the app, save your own plants to a personal database as well as favourite those from the Trefle API.

2.  User profile.
    !Profile Page](#)

        Here a user can update their personal information as well as add an image avatar.
        This is also where users can view and search for friends on the app and view their own collections.

3.  Create an account, log in and log out/
    !Create account page](#)

---

## Installation

- Clone the Git repository onto your local machine
- Navigate to the folder where the repository exists
- Run the command `$ npm i` in both the root folder and the client folder
- Then run the command `npm run dev`
- Your browser will automatically load and navigate to `localhost:3000`

---

## Further Development

Moving forward with this application, these are the key areas we'd like to develop.

- **Messaging functionality**
  While you can currently search for and view friends, we'd like to add the ability to exchange messages using socket.io.

- **Another one**
  One more example.

- **Another one**
  One more example.

---

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
