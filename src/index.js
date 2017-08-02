const three = require('three');
const initialScene = require('../assets/initialScene.json');

let loader = new three.ObjectLoader();

loader.load(initialScene, loadedScene => {
    // Code to manipulate loadedScene here
    
})