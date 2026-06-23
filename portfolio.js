

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
// const etchasketchLink = document.querySelector('#etchasketch');
// const etchasketchDetails = document.querySelector('#etchasketch-details');

// etchasketchLink.addEventListener('mouseenter', (e) => {
//   activeDescription.setAttribute("hidden", "");
//   activeDescription = etchasketchDetails;
//   activeDescription.removeAttribute("hidden");
// });

//---------------------HUECHURABA LOGIC ----------------------------- 
const huechurabaLink = document.querySelector('#huechuraba');
const huechurabaDetails = document.querySelector('#huechuraba-details');

huechurabaLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = huechurabaDetails;
  activeDescription.removeAttribute("hidden");
});

//---------------------HUASOVENTURAS LOGIC ----------------------------- 
const huasoventurasLink = document.querySelector('#huasoventuras');
const huasoventurasDetails = document.querySelector('#huasoventuras-details');

huasoventurasLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = huasoventurasDetails;
  activeDescription.removeAttribute("hidden");
});

//---------------------LA ULTIMA SOPAIPILLA (LUS) LOGIC ----------------------------- 
const lusLink = document.querySelector('#lus');
const lusDetails = document.querySelector('#lus-details');

lusLink.addEventListener('mouseenter', (e) => {
  activeDescription.setAttribute("hidden", "");
  activeDescription = lusDetails;
  activeDescription.removeAttribute("hidden");
});


//------------------CURRENT PROJECTS ----------------------------------
// const currentLink = document.querySelector('#current');
// const currentDetails = document.querySelector('#current-details');

// currentLink.addEventListener('mouseenter', (e) => {
//   activeDescription.setAttribute("hidden", "");
//   activeDescription = currentDetails;
//   activeDescription.removeAttribute("hidden");
// });

