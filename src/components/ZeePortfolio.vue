<script setup>
import { ref, onMounted } from 'vue'
import MomentumSlider from 'momentum-slider'
const slider = ref(null)

onMounted(async () => {
  createSlider()
})

const slides = ref([
  { image: 'https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/jurica-koletic-321003-unsplash.jpg', title: 'Vetster mobile app', url: 'https://vetster.com' },
  { image: 'https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/jurica-koletic-321003-unsplash.jpg', title: 'Simple recipes minisite', url: '#' },
  { image: 'https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/jurica-koletic-321003-unsplash.jpg', title: 'Vetster mobile app', url: '#' },
  { image: 'https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/jurica-koletic-321003-unsplash.jpg', title: 'Vetster mobile app', url: '#' }
])

function createSlider() {

    var slidersContainer = document.querySelector('.sliders-container')

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--numbers',
      range: [1, slides.value.length],
      rangeContent: function (i) {
        return '0' + i;
      },
      style: {
        transform: [{scale: [0.4, 1]}],
        opacity: [0, 1]
      },
      interactive: false
    })

    // Initializing the titles slider
    var titles = slides.value.map(item => { return item.title })
    var msTitles = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--titles',
      range: [0, ([slides.value.length -1])],
      rangeContent: function (i) {
        return '<h3>'+ titles[i] +'</h3>';
      },
      vertical: true,
      reverse: true,
      style: {
        opacity: [0, 1]
      },
      interactive: false
    })

    // Initializing the links slider
    var links = slides.value.map(item => { return item.url })
    var msLinks = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--links',
      range: [0, ([slides.value.length -1])],
      rangeContent: function (i) {
        return `<a class="ms-slide__link" href="${links[i]}" target="_blank">View Case</a>`;
      },
      vertical: true,
      interactive: false
    })

    // Get pagination items
    var pagination = document.querySelector('.pagination')
    var paginationItems = [].slice.call(pagination.children)

    // Initializing the images slider
    var images = slides.value.map((item) => { return item.image })
    var msImages = new MomentumSlider({
        // Element to append the slider
      el: slidersContainer,
      // CSS class to reference the slider
      cssClass: 'ms--images',
      // Generate the 4 slides required
      range: [0, ([slides.value.length -1])],
      rangeContent: function (i) {
        return `
          <div class="ms-slide__image-container">
            <div class="ms-slide__image" style="background-image: url(${images[i]})"></div>
          </div>`
      },
      // Syncronize the other sliders
      sync: [msNumbers, msTitles, msLinks],
      // Styles to interpolate as we move the slider
      style: {
        '.ms-slide__image': {
          transform: [{scale: [1.5, 1]}]
        }
      },
      // Update pagination if slider change
      change: function(newIndex, oldIndex) {
        if (typeof oldIndex !== 'undefined') {
          paginationItems[oldIndex].classList.remove('pagination__item--active')
        }
        paginationItems[newIndex].classList.add('pagination__item--active')
      }
    })

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
      if (e.target.matches('.pagination__button')) {
        var index = paginationItems.indexOf(e.target.parentNode)
          msImages.select(index)
      }
    })

}
</script>

<template>
  <h2 class="mt-16 mx-auto text-center text-slate-100 text-3xl font-bold">Recent work highlights</h2>
  <main class="sliders-container relative flex items-center justify-center flex-1 py-24 text-white" ref="slider" />
  <ul class="pagination pb-24 mx-auto flex justify-center">
      <li v-for="index in slides" :key="index" class="pagination__item">
        <a class="pagination__button" />
      </li>
    </ul>
</template>

<style>
.ms--images {
  position: relative;
  overflow: hidden;
}
.ms--images.ms-container--horizontal {
  width: 100%;
  height: 400px;
  max-width: 100%;
}
.ms--images.ms-container--horizontal .ms-track {
  left: calc(50% - 350px);
}
.ms--images.ms-container--horizontal .ms-slide {
  display: inline-flex;
}
.ms--images .ms-track {
  display: flex;
  position: absolute;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.ms--images .ms-slide {
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 400px;
  user-select: none;
}
.ms--images {
  left: calc(50% - 280px);
}
.ms--images.ms-container--horizontal .ms-track {
  left: -70px;
}
.ms--images .ms-slide__image-container {
  width: 80%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.ms--images .ms-slide__image {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.ms--numbers {
  position: relative;
  overflow: hidden;
}
.ms--numbers.ms-container--horizontal {
  width: 240px;
  height: 240px;
  max-width: 100%;
}
.ms--numbers.ms-container--horizontal .ms-track {
  left: calc(50% - 120px);
}
.ms--numbers.ms-container--horizontal .ms-slide {
  display: inline-flex;
}
.ms--numbers .ms-track {
  display: flex;
  position: absolute;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.ms--numbers .ms-slide {
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  user-select: none;
}
.ms--numbers {
	 position: absolute;
	 left: calc(50% - 380px);
	 top: calc(50% - 300px);
	 z-index: -1;
	 pointer-events: none;
}
.ms--numbers .ms-slide {
  font-size: 9em;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.2);
}
.ms--titles {
  position: relative;
  overflow: hidden;
  line-height: 1;
}
.ms--titles.ms-container--vertical {
  width: 400px;
  height: 170px;
  max-height: 100%;
}
.ms--titles.ms-container--vertical .ms-track {
  flex-direction: column;
  top: calc(50% - 85px);
}
.ms--titles.ms-container--vertical.ms-container--reverse .ms-track {
  flex-direction: column-reverse;
  top: auto;
  bottom: calc(50% - 85px);
}
.ms--titles.ms-container--vertical .ms-slide {
  display: flex;
}
.ms--titles .ms-track {
  display: flex;
  position: absolute;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.ms--titles .ms-slide {
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 170px;
  user-select: none;
}
.ms--titles {
  position: absolute;
  left: calc(50% - 420px);
  top: calc(50% - 85px);
  z-index: 1;
  pointer-events: none;
}
.ms--titles .ms-track {
  white-space: normal;
}
.ms--titles .ms-slide {
  font-size: 3.3em;
  font-weight: 600;
}
.ms--titles .ms-slide h3 {
  margin: 0;
  text-shadow: 1px 1px 2px black;
}
.ms--links {
  position: relative;
  overflow: hidden;
}
.ms--links.ms-container--vertical {
  width: 120px;
  height: 60px;
  max-height: 100%;
}
.ms--links.ms-container--vertical .ms-track {
  flex-direction: column;
  top: calc(50% - 30px);
}
.ms--links.ms-container--vertical .ms-slide {
  display: flex;
}
.ms--links .ms-track {
  display: flex;
  position: absolute;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.ms--links .ms-slide {
  align-items: center;
  justify-content: start;
  width: 120px;
  height: 60px;
  user-select: none;
}
.ms--links {
  position: absolute;
  left: calc(50% - 420px);
  top: calc(50% + 105px);
  z-index: 1;
}
.ms--links .ms-track {
  white-space: normal;
}
.ms--links .ms-slide__link {
  font-weight: 600;
  padding: 5px 0 8px;
  border-bottom: 2px solid white;
  cursor: pointer;
}
.pagination {
  display: flex;
  width: 100%;
  /* position: absolute;
  left: calc(50% - 420px);
  top: calc(100%); */
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 1;
}
.pagination__button {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  padding: 10px 0;
}
.pagination__button:before, .pagination__button:after {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 1px);
  width: 100%;
  box-shadow: 0 1px 0 #0b0d14;
}
.pagination__button:before {
  height: 6px;
  background-color:#115e59;
}
.pagination__button:after {
  height: 6px;
  background-color:#2dd4bf;
  opacity: 0;
  transition: 0.5s opacity;
}
.pagination__item--active .pagination__button:after {
  opacity: 1;
}
@media screen and (max-width: 860px) {
  .ms--numbers {
    left: calc(50% - 120px);
	}
  .ms--titles {
    left: calc(50% - 200px);
    top: calc(50% - 135px);
    text-align: center;
	}
  .ms--links {
    left: calc(50% - 60px);
    top: calc(50% + 80px);
	}
}
@media screen and (max-width: 600px) {
  .ms--images {
    overflow: visible;
  }
}
@media screen and (max-width: 400px) {
	.ms--titles .ms-slide {
    transform: scale(0.8);
	}
}
</style>