/* export const gridImages = [{
  id: 'a3f7b2c9d1',
  image: 'https://images.pexels.com/photos/29367936/pexels-photo-29367936/free-photo-of-vibrant-red-protea-flower-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=600'
}, {
  id: 'x4j8k2q0m6',
  image: 'https://images.pexels.com/photos/21581636/pexels-photo-21581636/free-photo-of-extreme-close-up-of-a-aster.jpeg?auto=compress&cs=tinysrgb&w=600'
}, {
  id: 'v9w3s0l7t5',
  image: 'https://images.pexels.com/photos/7815535/pexels-photo-7815535.jpeg?auto=compress&cs=tinysrgb&w=600'
}, {
  id: 'p1d2e6y8k3',
  image: 'https://images.pexels.com/photos/28184421/pexels-photo-28184421/free-photo-of-purple-flowers-in-a-garden-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600'
}, {
  id: 'f5o7u2c4z9',
  image: 'https://images.pexels.com/photos/17206994/pexels-photo-17206994/free-photo-of-purple-flowers-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600'
}];


  export let gridHTML = '';

  gridImages.forEach((gridImage) => {
    gridHTML += 
    `<div class="grid-item">
          <img src="${gridImage.image}" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="${gridImage.image}" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="${gridImage.image}" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="${gridImage.image}" class="grid-image" alt="">
        </div>
      </div>
      
      <div class="grid-item">
          <img src="https://images.pexels.com/photos/5734338/pexels-photo-5734338.jpeg?auto=compress&cs=tinysrgb&w=600" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="https://images.pexels.com/photos/5734338/pexels-photo-5734338.jpeg?auto=compress&cs=tinysrgb&w=600" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="https://images.pexels.com/photos/5734338/pexels-photo-5734338.jpeg?auto=compress&cs=tinysrgb&w=600" class="grid-image" alt="">
        </div>

        <div class="grid-item">
          <img src="https://images.pexels.com/photos/5734338/pexels-photo-5734338.jpeg?auto=compress&cs=tinysrgb&w=600" class="grid-image" alt="">
        </div>`
  });

  document.querySelector('.js-right-grid-container').innerHTML = gridHTML;

  console.log(); */

  