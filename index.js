/* Copy all JavaScript from index.html and paste here */const rotatingItems = document.querySelectorAll('.rotating-item');
    
    rotatingItems.forEach(item => {
        item.addEventListener('click', function(e) {
          // Pause all animations
          rotatingItems.forEach(item => item.classList.add('paused'));
          
          // Resume animation after 2 seconds
          setTimeout(() => {
            rotatingItems.forEach(item => item.classList.remove('paused'));
          }, 2000);
        });
      });
      function createSparkle() {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          sparkle.style.left = Math.random() * 100 + 'vw';
          sparkle.style.top = Math.random() * 100 + 'vh';
          sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
          document.querySelector('.wave-background').appendChild(sparkle);
          setTimeout(() => sparkle.remove(), 3000);
      }
      setInterval(createSparkle, 200);