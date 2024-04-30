const welcomeContainer = document.querySelector('#welcome');
let activeDescription = welcomeContainer;

//---------------------------NEURONE LOGIC ------------------------- 
const neuroneLink = document.querySelector('#neurone');
const neuroneDetails = document.querySelector('#neurone-details');

neuroneLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = neuroneDetails;
  activeDescription.removeAttribute("hidden");
});

//---------------------SYSMEC LOGIC ----------------------------- 
const sysmecLink = document.querySelector('#sysmec');
const sysmecDetails = document.querySelector('#sysmec-details');

sysmecLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = sysmecDetails;
  activeDescription.removeAttribute("hidden");
});

//----------------------ETCH A SKETCH LOGIC ----------------------------- 
const etchasketchLink = document.querySelector('#etchasketch');
const etchasketchDetails = document.querySelector('#etchasketch-details');

etchasketchLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = etchasketchDetails;
  activeDescription.removeAttribute("hidden");
});

//------------------CURRENT PROJECTS ----------------------------------
const currentLink = document.querySelector('#current');
const currentDetails = document.querySelector('#current-details');

currentLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = currentDetails;
  activeDescription.removeAttribute("hidden");
});

