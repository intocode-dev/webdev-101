const jquery = require('jquery');
window.jQuery = window.$ = jquery;
const parallax = require('jquery-parallax.js');

import './style.css';
import parallaxSrc from '../assets/autumn.jpg';

$('.parallax-window').parallax({ imageSrc: parallaxSrc });
