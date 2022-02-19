# Herolo Home Assignment

- This repo contains a functuinality tests of webpage "https://automation.herolo.co.il/".
- The tests written with Cypress.
- Environment Variables are used.
- Each test scenario is isolated from all other test cases
- The project write with Page Object Design Pattern.


The Test senacrios is:

1. Logo "Herolo" has visible

2. get the global window.location object of the page that is currently active

3. should logo has exist in page

4. should send form data and get 200 OK

5. should attampt to send form with no data - validate alerts input

6. should disaply alert when email input are not valid

7. get the length of the menu link items

8. check if the whatsapp link is actually live

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Fork this repo

If you want to experiment with running this project,
After forking this project in Github, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/dor-fried/dor-fried-17-02-2022.git

## cd into the cloned repo
cd cypress-example-abra

## install the node_modules
npm install

## run the test
npm test
```