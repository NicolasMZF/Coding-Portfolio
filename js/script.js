const svg = document.getElementById('starrySky');
        function createStars(numStars){
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

        createStars(100);