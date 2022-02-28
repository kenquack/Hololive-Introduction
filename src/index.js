import { createScene } from "./scripts/3dscene";
import { loadYoutubeStats } from "./scripts/youtubeAPI";
import { createElements } from "./scripts/createElements";

createScene();
loadYoutubeStats();
createElements();
