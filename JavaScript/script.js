//KOD FÖR KLOCKA START
function clock(){
 var monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "October", "November", "December"]
 var today = new Date();
 document.getElementById('date').innerHTML =(today.getDate() +' '+ monthNames[today.getMonth()] +' '+today.getFullYear(
    ));

    var h = today.getHours();
    var m = today.getMinutes();    
    h =h<10? '0'+h: h;
    m =m<10? '0'+m: m;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
}var inter = setInterval(clock, 1000);
//KOD FÖR KLOCKA SLUT



//KOD FÖR LÄNKAR START
const addLinkBtn = document.getElementById('add-link-btn');
const quickLinksList = document.querySelector('.link-list');
const popuplink = document.getElementById('popuplink');
let links = [];

// Ladda länkar från localStorage när sidan laddas
window.addEventListener('load', () => {
  const storedLinks = localStorage.getItem('link-list');
  if (storedLinks) {
    links = JSON.parse(storedLinks);
    renderLinks();
  }
});

const renderLinks = () => {
  quickLinksList.innerHTML = '';
  links.forEach(link => {
    const newLink = createLinkElement(link.title, link.url);
    quickLinksList.appendChild(newLink);
  });
};

const createLinkElement = (title, url) => {
  const newLink = document.createElement('li');

  // Skapa en bild för favicon
  const faviconImg = document.createElement('img');
  faviconImg.setAttribute('src', `https://www.google.com/s2/favicons?domain=${url}`);
  faviconImg.setAttribute('alt', 'Favicon');
  faviconImg.setAttribute('width', '25');
  faviconImg.setAttribute('height', '25');

  newLink.innerHTML = `
    <a href="${url}" target="_blank">${title}</a>
    <i class="material-icons-outlined remove-link">delete</i>
  `;
  newLink.insertBefore(faviconImg, newLink.firstChild);

  const removeLinkBtn = newLink.querySelector('.remove-link');
  removeLinkBtn.addEventListener('click', () => {
    const index = links.findIndex(item => item.title === title && item.url === url);
    if (index !== -1) {
      links.splice(index, 1);
      localStorage.setItem('link-list', JSON.stringify(links));
      renderLinks();
    }
  });
  return newLink;
};

addLinkBtn.addEventListener('click', () => {
  popuplink.classList.add('active');
});

document.querySelector('.close').addEventListener('click', () => {
    popuplink.classList.remove('active');
  });


window.addEventListener('click', (event) => {
    if (event.target == popuplink) {
      popuplink.classList.remove('active'); 
    }
  });

function closePopup() {
    popuplink.classList.remove('active');
  }

  document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    addLinkFromPopup(); 
  });
  
  

  function addLinkFromPopup() {
    const maxLinks = 5;
    const title = document.getElementById('popupTitle').value;
    let url = document.getElementById('popupURL').value; 

    if (!url.startsWith('https://www.') && !url.startsWith('http://www.')) {
  
        url = 'https://www.' + url;
    }

    const validDomains = ['.com', '.se', '.org', '.net','.io','.co','.gov','.mil','.edu'];
    const isValidDomain = validDomains.some(domain => url.endsWith(domain));

    if (title && url && isValidDomain) {
      if(links.length < maxLinks){

      
        links.push({ title, url });
        localStorage.setItem('link-list', JSON.stringify(links));
        renderLinks();
        closePopup(); 
      }else{
        alert('Du kan tyvärr inte spara fler än ' + maxLinks + ' länkar. Vänligen ta bort en länk för att lägga till en ')
      }
    } else {
        if (!isValidDomain) {
            alert('Felaktig domänändelse. Länken måste sluta med .com, .se eller en annan accepterad domänändelse.');
        } else {
            alert('Båda fälten måste fyllas i.');
        }
    }
}

  const urlInput = document.getElementById('popupURL');
  if (!urlInput.value.trim()) {
      urlInput.value = "https://www.";
  }
//KOD FÖR LÄNKAR SLUT





