function createStars(numStars){
  const svg = document.getElementById('starrySky');
  for (let i = 0; i < numStars; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const radius = Math.random() * 2 + 0.5;

  star.setAttribute('cx', `${x}%`);
  star.setAttribute('cy', `${y}%`);
  star.setAttribute('r', radius);
  star.setAttribute('fill', 'white');

  svg.appendChild(star);
  }
}

function scrollToCenter(event, target) {
  event.preventDefault();
  const element = document.getElementById(target);
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  var offset = 0;
  if(target=='formation'){
    var offset = 200;
  } else {
    var offset = 100; //adjust the value for better position future me
  }
  
  window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth'
  });
}

createStars(300);