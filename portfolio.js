const welcomeContainer = document.querySelector('#welcome');

//---------------------------NEURONE LOGIC ------------------------- 
const neuroneLink = document.querySelector('#neurone');
const neuroneDetails = document.querySelector('#neurone-details');

neuroneLink.addEventListener('mouseenter', (e) => {
  welcomeContainer.setAttribute("hidden", "");
  neuroneDetails.removeAttribute("hidden");
});

neuroneLink.addEventListener('mouseout', (e) => {
  welcomeContainer.removeAttribute("hidden");
  neuroneDetails.setAttribute("hidden", "");
});

//---------------------SYSMEC LOGIC ----------------------------- 
const sysmecLink = document.querySelector('#sysmec');
const sysmecDetails = document.querySelector('#sysmec-details');

sysmecLink.addEventListener('mouseenter', (e) => {
  welcomeContainer.setAttribute("hidden", "");
  sysmecDetails.removeAttribute("hidden");
});

sysmecLink.addEventListener('mouseout', (e) => {
  welcomeContainer.removeAttribute("hidden");
  sysmecDetails.setAttribute("hidden", "");
});

//----------------------ETCH A SKETCH LOGIC ----------------------------- 
const etchasketchLink = document.querySelector('#etchasketch');
const etchasketchDetails = document.querySelector('#etchasketch-details');

etchasketchLink.addEventListener('mouseenter', (e) => {
  welcomeContainer.setAttribute("hidden", "");
  etchasketchDetails.removeAttribute("hidden");
});

etchasketchLink.addEventListener('mouseout', (e) => {
  welcomeContainer.removeAttribute("hidden");
  etchasketchDetails.setAttribute("hidden", "");
});
