// Add your own story text and image paths here. Example:
// story: `Your story goes here.`, images: [{ src: 'images/photo.jpg', alt: 'Describe your photo' }]
const locations = [
  { id: 'universal-studios', name: 'Universal Studios Hollywood', label: 'Universal Studios', area: 'UNIVERSAL CITY', subtitle: 'behind-the-scenes magic', icon: '✧', color: '#c5a45e', tint: '#f3ecd8', x: 65.5, y: 25.6, story: "I spent 12 hours at Universal Studios, I saw actual movie sets, and I entered immersive environments like The Wizarding World of Harry Potter. Universal Studios was magical; it deliberately created an illusion where you could step away from the real world and take part of your favourite movie and tv shows. Walking into Wizarding World of Harry Potter world felt like I walked into an actual scene from the movies. The smell of Butterbeer, the crowds, the enchanting music, and the buildings surrounding me all felt surreal. It was one of the coolest experiences seeing real sets and realizing how places I have seen on screen were physically constructed. What I find interesting is that Universal Studios was the most artificial place I visited in Los Angeles, yet it felt the most honest. There was no attempt to convince me that everything around me was real, I knew it was fabricated, and it was entirely my choice to believe it anyway. Seeing actual movie sets made that distinction incredibly fascinating. Places that felt enormous and real on my screen had just become physical structures in front of me. One that immediately stood out was the grocery store from the sitcom Superstore. For once, seeing behind the illusion didn’t destroy it; it made the magic even more fascinating.", images: [{ src: 'images/universal-studios-2926.jpg', alt: 'Visitors approaching the Universal Studios Hollywood entrance arch beneath palm trees' }, { src: 'images/universal-studios-2939.jpg', alt: 'Hogwarts castle above visitors at the Wizarding World of Harry Potter' }] },
  { id: 'scientology', name: 'Church of Scientology', label: 'Scientology', area: 'HOLLYWOOD', subtitle: 'different side of Hollywood', icon: '⌂', color: '#a393b5', tint: '#ede7f1', x: 72.2, y: 40, story: "Seeing this place with my own eyes felt unreal. I had seen some internet discourse on Scientology before, but I had never looked into it with much depth. The windows were fogged, and a glowing sign on the side of the building spelled out “SCIENTOLOGY” vertically. If you walked by without paying attention, nothing would seem particularly out of place. Yet this same building at 6724 Hollywood Boulevard was one I had seen on social media, where people discussed their unusual experiences with Scientology. Suddenly, it was just there, incorporated into an ordinary city street. There was a disconnect between its appearance and its reputation. The building was simple and ordinary, existing openly in the middle of a popular city, while the controversial history stayed sealed behind its doors. The atmosphere felt unsettling to me. I even noticed that people passing by barely seemed to look at the building, which made me wonder how many people knew what it was, how many deliberately ignored it, and how many simply thought it was just another building on Hollywood Boulevard.\n", images: [{ src: 'images/scientology-3138.jpg', alt: 'Hollywood Boulevard at night with a palm tree, traffic, and the illuminated Scientology building' }, { src: 'images/scientology-3139.jpg', alt: 'Nighttime view of the Scientology building with its vertical sign and billboard' }] },
  { id: 'walk-of-fame', name: 'Hollywood Walk of Fame', label: 'Walk of Fame', area: 'HOLLYWOOD', subtitle: 'sidewalk full of stars', icon: '★', color: '#c88c79', tint: '#f3e4dd', x: 57.7, y: 44.2, story: "I expected this slice of Hollywood to be filled with glamour, fashion, and fame. But that was the image of Hollywood plastered online, meant to lure you in with its beauty and magnificence. The “City of Angels” felt far from angelic. Walking with the stars beneath my feet, I was met with the smell of urine and visible poverty sitting nearly at every corner, right beside stars bearing the names of some of the wealthiest and most famous people in the world. It felt almost poetic in a disturbing way: crowded, dirty streets filled with loud music in the streets to drown out the homelessness; people sleeping on the sidewalks, some seemingly unaware of the crowds moving around them. Why is one of the world’s most famous symbols of wealth and celebrity surrounded by such visible poverty? \n\nI felt strange as a tourist, realising I was there photographing the names of wealthy celebrities while people struggled just a few inches away.  I was participating in the very tourism that holds everyone’s attention glued to the stars underneath our feet and the famous buildings on Hollywood Boulevard instead of the reality engulfing them. I realized afterwards that Hollywood’s problems were never hidden; they were just packaged in glitter, making it easier for us to look past them.", images: [{ src: 'images/walk-of-fame-2395.jpg', alt: 'Britney Spears star on the Hollywood Walk of Fame' }, { src: 'images/walk-of-fame-2453.jpg', alt: 'Hollywood Walk of Fame at night with illuminated signs and the Roosevelt Hotel' }] },
  { id: 'rodeo-drive', name: 'Rodeo Drive', label: 'Rodeo Drive', area: 'BEVERLY HILLS', subtitle: 'A stroll through Beverly Hills', icon: '♧', color: '#819875', tint: '#e8edde', x: 29.1, y: 62, story: "Beverly Hills was like stepping into the version of Los Angeles I had been promised. Just a short drive away from the poverty I had witnessed in another part of Los Angeles, which was the home of the biggest stars in the world. Suddenly, the environment communicated something different. I saw luxury storefronts, expensive cars, clean streets, and cosmetic surgery offices. I entered the Los Angeles I imagined before. Just past the “RODEO COLLECTION” sign stood a giant tower with a glass elevator. Plastered across its side was the name of a plastic surgeon. This detail stood out to me. In a city so closely associated with beauty and appearance, even the skyline advertised the possibility of becoming someone different. I felt extremely out of place here. I was surrounded by brands and lifestyles that seemed inaccessible to me, yet for a moment, I imagined what it would feel like to belong to this world; to walk into those stores and get whatever my heart desires without looking at the price tag, to live behind a gated home and own multiple luxury cars. I felt like I did not fit into my surroundings; I felt like a fish out of water. No makeup on my face, my hair slicked back, and the grand total of my outfit was probably twenty dollars. I wasn’t a doll, and this felt like a place where dolls existed. When I reflect on it now, what caught my attention most is how extreme wealth and extreme hardship can exist so close to each other. On Hollywood Boulevard, I walked over the names of rich and famous people while poverty existed alongside them. Here, I was surrounded by the world of those names. The stars were no longer beneath my feet; their wealth was all around me.\n", images: [{ src: 'images/rodeo-drive-2413.jpg', alt: 'A white Mercedes parked outside Rodeo Collection beside palm trees and storefronts' }, { src: 'images/rodeo-drive-2456.jpg', alt: 'Rodeo Collection entrance overlooking a courtyard and glass elevator' }] }
];
const pins = document.querySelector('#pins');
const list = document.querySelector('#location-list');
const pageId = document.body.dataset.location;
function colors(location) { return `--color:${location.color};--tint:${location.tint}`; }
function pageUrl(location) { return `${location.id}.html`; }
locations.forEach(location => {
  const link = document.createElement('a');
  link.className = 'location-link';
  link.href = pageUrl(location);
  link.style.cssText = colors(location);
  link.innerHTML = `<span aria-hidden="true">${location.icon}</span>${location.name}`;
  if (pageId === location.id) link.setAttribute('aria-current', 'page');
  list.append(link);
  if (!pins) return;
  const pin = document.createElement('a');
  pin.className = 'pin';
  pin.href = pageUrl(location);
  if (pageId === location.id) pin.setAttribute('aria-current', 'page');
  pin.style.cssText = `${colors(location)};left:${location.x}%;top:${location.y}%`;
  pin.setAttribute('aria-label', `Read the ${location.name} story`);
  pin.innerHTML = `<span class="pin-icon"><span aria-hidden="true">${location.icon}</span></span><span class="pin-label">${location.label}</span>`;
  pins.append(pin);
});
if (pins && document.querySelector('#zoom-in')) {
  let zoom = 1;
  const updateZoom = () => {
    [document.querySelector('#map-art'), pins].forEach(element => {
      element.style.transformOrigin = '53% 42%';
      element.style.transform = `scale(${zoom})`;
    });
    document.querySelector('#zoom-in').disabled = zoom >= 1.6;
    document.querySelector('#zoom-out').disabled = zoom <= 1;
  };
  document.querySelector('#zoom-in').addEventListener('click', () => { zoom = Math.min(1.6, +(zoom + .2).toFixed(1)); updateZoom(); });
  document.querySelector('#zoom-out').addEventListener('click', () => { zoom = Math.max(1, +(zoom - .2).toFixed(1)); updateZoom(); });
  document.querySelector('#reset-map').addEventListener('click', () => { zoom = 1; updateZoom(); });
  updateZoom();
}
if (pageId) {
  const location = locations.find(item => item.id === pageId);
  const article = document.querySelector('.story-page');
  article.style.cssText = colors(location);
  document.querySelector('.story-space').textContent = location.story;
  const gallery = document.querySelector('.photo-grid');
  if (location.images.length) {
    gallery.replaceChildren();
    location.images.forEach(photo => {
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt || location.name;
      image.loading = 'lazy';
      gallery.append(image);
    });
  }
}
