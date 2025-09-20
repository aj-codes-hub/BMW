  const cells=document.getElementById('bg_cell');
  const cellContainer=document.getElementById('cell-container');
  
  for(let i=1;i<110;i++){
    let clone=cells.cloneNode(true);
    cellContainer.appendChild(clone);

  }
   
  const btn=document.getElementById('dropdownBtn');
  const menu=document.getElementById('dropdownMenu');

  
  btn.addEventListener('click',() =>{
    menu.classList.toggle('max-h-80');
    menu.classList.toggle('max-w-60');
    menu.classList.toggle('border');
    menu.classList.add('border');
    menu.classList.add('max-w-0');
    menu.classList.add('max-h-0');
  });

   // Respect reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveal = (el) => {
      // remove hidden state
      el.classList.remove('opacity-0', 'mt-[50%]');
      // show state
      el.classList.add('opacity-100', 'mt-[0%]');
    };

    if (prefersReduced) {
      // Instantly show without animation
      document.querySelectorAll('.reveal').forEach(el => reveal(el));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              obs.unobserve(entry.target); // run once
            }
          });
        },
        { root: null, threshold: 0.15 } // ~15% visible
      );

      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    }
   
   document.addEventListener("scroll", () => {
  const el = document.getElementById("card1");
  const rect = el.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    el.classList.add("opacity-100","ml-[50%]");
    el.classList.remove("opacity-0","sm:ml-[100%]");
  }
});

 document.addEventListener("scroll", () => {
  const el = document.getElementById("carImages");
  const rect = el.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    el.classList.add("opacity-100","max-h-[76%]");
    el.classList.remove("opacity-0","max-h-[1%]");
  }
});
document.addEventListener("scroll", () => {
  const el = document.getElementById("cardChange");
  const rect = el.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    el.classList.add("opacity-100");
    el.classList.remove("opacity-0");
  }
});
