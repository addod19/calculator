# Milestone 4 

> In this Milestone, I performed the following actions;
  - Create a logic directory with 2 files
    - calculate.js
    - operate.js
  - Implement calculate.js module
    - Contain one default method calculate
    - Calculate method accepts calculator data object and button name as arguments
    - Calculator data object contains 3 properties
      - total
      - next
      - operation
    - The method uses the buttonName argument to mutate the calculator’s data object and return its modified version
  - Implement operate.js module
    - Import big.js module through npm package
    - Implements default method operate
    - The operate function accepts the following as arguments
      - num1
      - num2
      - operation
    - Switch statement is use for switching between operation and performing the required math
    - Return result after each operation
 - Import calculate.js to the App component
 - Fix linter errors with the following commands
    - ``` npx stylelint "**/*.{css,scss}" ``` for stylelint
    - ``` npx eslint . ``` for eslint 


## Tools To Work With

- Node.js
- React
- React-DOM
- React-Create-App
- npm
- React
- Heroku

## Deployment

- ``` heroku create $APP_NAME --buildpack mars/create-react-app```
- ``` git push heroku Milestone-1:master ```
- ` heroku open `

## Live Demo

[Live Demo Link](https://calculator-20.herokuapp.com/)


## Getting Started

To get a local copy up and running follow these simple example steps.

1. ``` git clone https://github.com/addod19/calculator.git ```
2. ``` cd calculator ```
3. ``` git checkout  start```
4. ``` yarn i ```
5. ``` yarn start ```

## Screenshot
![screenshot](call.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Prerequisites

- A modern browser

## Authors

👤 **Daniel Larbi Addo**

- Github: [@addod19](https://github.com/addod19)
- Twitter: [@DanielLarbiAdd1](https://twitter.com/DanielLarbiAdd1)
- Linkedin: [Daniel Larbi Addo](https://linkedin.com/in/daniel-larbi-addo/)
- Email: (addodaniellarbi@gmail.com)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/addod19/calculator/issues).


1. Fork it (https://github.com/addod19/calculator/fork)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Show your support

Give us a ⭐️ if you like this project!

## Acknowledgments

- MIcroverse
- Microverse TSE's

## 📝 License

This project is [Apache](lic.url) licensed.
