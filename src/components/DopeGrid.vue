<script setup>
import { ref, onMounted } from 'vue'
import anime from 'animejs'

const grid = ref(null)

let columns, rows

const colors = [
  'rgb(229, 57, 53)',
  'rgb(253, 216, 53)',
  'rgb(244, 81, 30)',
  'rgb(76, 175, 80)',
  'rgb(33, 150, 243)',
  'rgb(156, 39, 176)'
]

// let count = -1
let toggled = false

const createTile = (i) => {
  const el = grid.value
  const tile = document.createElement('div')
  tile.classList.add('tile')
  tile.onclick = (e) => {
    handleClick(i)
  }
  return tile
}

const createTiles = (qty) => {
  const el = grid.value
  Array.from(Array(qty)).map((tile, index) => {
    el.appendChild(createTile(index))
  })
}

function createGrid() {
  const el = grid.value
  el.innerHTML = ''
  columns = Math.floor(el.clientWidth / 40)
  rows = Math.floor(el.clientHeight / 40)

  el.style.setProperty('--columns', columns)
  el.style.setProperty('--rows', rows)

  createTiles(columns * rows)
}

const handleClick = (i) => {
  // count = count + 1
  toggled = !toggled

  anime({
    targets: '.tile',
    opacity: toggled ? 0 : 1,
    // backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: i
    })
  })
}

onMounted(() => {
  createGrid()
  window.onresize = () => createGrid()
})
</script>

<template>
  <div ref="grid" id="tiles" />
</template>

<style>
#tiles {
  animation: background-change 7s linear infinite;
  padding: 0.5px;
  background-size: 200%;
  @apply aspect-video relative z-0 w-full grid bg-gradient-to-r from-rose-700 via-violet-500 to-rose-700;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
.tile {
  @apply relative cursor-pointer;
}
.tile::before {
  @apply bg-slate-900 absolute;
  content: '';
  inset: 0.5px;
}
@keyframes background-change {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
}
</style>