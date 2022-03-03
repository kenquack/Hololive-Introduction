import { createScene } from "./scripts/3dscene";
import { loadYoutubeStats } from "./scripts/youtubeAPI";
import { createElements } from "./scripts/createElements";
import { features } from "./scripts/features"
import { addSliders } from "./scripts/dragScroll";

// document.querySelector('body').style.zoom = `${1 / window.devicePixelRatio * 125}%`;

createScene();
loadYoutubeStats();
createElements();
features();
addSliders();