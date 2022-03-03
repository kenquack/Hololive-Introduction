# The World of Vtubers
![](assets/gifs/demo1.gif)

## Background and overview
The World of Vtubers is a site to introduce the general public to the talents and awesomeness of Vtubers. Clicking on an icon will open up a window with youtube statistics such as view count and subscriber count, as well as links leading to social media. Explore the bottom navigation bar and find your waifu today!
## Functionality & MVPs
Users will be able to:
* Scroll through 9 different vtubers
* Click on icons to see detailed information
* Discover social media of the specific vtuber and subscribe/follow
* Enjoy the beautiful 3D model built with three js
## Architecture and technologies
The project uses the following technologies:
* `Javascript` for scrolling logic, interactivity, and creating HTML elements
* `Three js` for visualization
* `Youtube API` for vtuber statistics
* `Webpack` for bundling JS files

![](assets/gifs/scrollbar1.gif)

I was able to create a nav bar that can be scrolled by being dragged. To achieve this, I found the document that I was targeting as well as set some variables that I would need later.
```
const slider = document.querySelector('#profiles');
    let isDown = false;
    let startX;
    let scrollLeft;

```
Next, I had to add event listeners to listen for when I click down on my mouse and when I move my mouse; adding an 'active' class to my slider const and changing the x-value whenever my mouse moves. 
```
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; //scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
```
Lastly, I added event listeners for when I either let go of my mouse or if my cursor leaves the nav bar. This involved just removing the 'active' class from my slider and setting isDown back to false.
```
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

```

## Future Features
* Add a lot more vtubers, the site is technically called the *world* of VTubers, right?
* Add a drop down menu that will include categorized VTubers.
* Add flags next to each name to indicate what languages are mainly spoken.
