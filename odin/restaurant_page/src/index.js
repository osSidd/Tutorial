import './styles.css'
import img1 from '../uploads/image.jpg'
import { greeting } from "./greetings.js";

console.log(greeting)

const img = document.createElement('img')
img.src = img1
console.log(img1)
document.querySelector('body').appendChild(img)