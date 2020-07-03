# Milestone 5

> In this Milestone, I performed the following actions;
  - App Component
    - App set as stateful parent component
    - Initialize state in constructor with 3 properties;
      - Total
      - Next
      - Operation
    - Render function display the following component
      - Display
      - Button Panel
    - Implement handle click function which takes button name as argument and changes state based on result of calculate function
    - Pass the total or next value to Display to display the current result
    - Pass handleClick as a clickHandler property to ButtonPanel
  - Button Panel
    - Implement the handleClick function which takes buttonName as an argument and returns clickHandler from props
    - Pass the clickHandler property to each button in the panel
  - Button
    - Implement the handleClick function which takes buttonName as an argument and returns clickHandler from props
    - Use the onClick event to attach the handleClick event to the button
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
