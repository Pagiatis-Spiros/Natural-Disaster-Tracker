<h1 align="center">Natural-Disaster-Tracker</h1>
<h2 align="center">

[![Mentioned in Awesome Vue.js](https://awesome.re/mentioned-badge.svg)](https://github.com/vuejs/awesome-vue)

</h2>

<h2 align="center"><a  href="https://solitairevue.firebaseapp.com">Live Demo</a></h2>

### [Contributions are Welcome](https://github.com/silent-lad/VueSolitaire/blob/master/CONTRIBUTING.md)

## Description

<p align="center">
<img width="1433" alt="Screenshot 2021-12-12 at 01 52 36" src="https://user-images.githubusercontent.com/52991990/145703425-7dbcdffe-5c4a-4e2d-9fc3-ce4ceceec66a.png"></p>

Used Google Maps official API as well as NASA's EONET API to create an app which shows where certain disasters are located through an interactive map!

## How to use

### Select various types of disasters the map should show.

- **Hover** over the search-bar under "Select-Disaster" and click on the ones you want to see.

### Get details of a disaster at a specific location.

- **Click** on the marker at your preferred location and a box with its details should pop up on the right as shown in the screenshot.

## Downloading all the different disasters' details in a CSV file.

- **Click** on the download icon in the header and a CSV files with all the data will be downloaded. (Preferably open in Excel for neat formatting)

### Drag and Drop

- Drag and drop is implemented with native html5 drag and drop api with @drag, @dragend, @dragenter eventlisteners on the Card.vue component.
- Libraries like Vue.draggable were not used as i had to write most of the drag and drop logic according to the solitaire game type and I also had to **MOVE** the stack of cards.
- Ghost image in drag is removed instead the **whole stack** of card moves with cursor change.

### CSS

- Each and every card is 100% css except the SVG of the suit in the center of the card,which is made by illustrator tool.

  <p align="center"><img  src="./readme_assets/4.png" width="30%"></p>

### 3 mode menu

Choose from 3 variants of solitaire form the main menu

<p align="center"><img  src="./readme_assets/menu.png" width="70%"></p>

# Variants

## **Klondike**

<p align="center">
<img  src="./readme_assets/3.png" width="80%">
</p>
<!-- <img src="./readme_assets/3.png" width="50%"> -->

## **Spider 4 Suit**

<p align="center">
<img  src="./readme_assets/5.png" width="80%">
</p>

## **Spider 1 Suit**

<p align="center">
<img  src="./readme_assets/1.png" width="80%">
</p>

## Project setup

```
npm install
npm run serve
```

## Future scope

- Add winning animation.

## Support on Beerpay

Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/silent-lad/VueSolitaire/badge.svg?style=beer-square)](https://beerpay.io/silent-lad/VueSolitaire) [![Beerpay](https://beerpay.io/silent-lad/VueSolitaire/make-wish.svg?style=flat-square)](https://beerpay.io/silent-lad/VueSolitaire?focus=wish)
