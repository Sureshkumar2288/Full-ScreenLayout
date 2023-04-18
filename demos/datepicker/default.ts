import { DatePicker } from '../../src/datepicker/datepicker';
/**
 * Default Datepicker sample
 */

/*Initialize the datepicker component*/
let datepicker: DatePicker = new DatePicker({
    width:"250px",
    value: new Date('5/7/2018'),
    mobileFullScreenMode: true,
    cssClass: 'e-bigger',
});
datepicker.appendTo('#datePicker');

// Get references to the dropdown and link elements
const themeSelector = document.getElementById('theme-selector');
const themeLink = document.getElementById('theme');

// Add an event listener to the dropdown
themeSelector.addEventListener('change', () => {
  // Get the selected theme value
  const selectedTheme = (themeSelector as any).value;
  
  // Set the href attribute of the link based on the selected theme
  switch (selectedTheme) {
    case 'bootstrap4':
      (themeLink as any).setAttribute('href', '../themes/bootstrap4.css');
      break;
    case 'material':
        (themeLink as any).setAttribute('href', '../themes/material.css');
      break;
    case 'fabric':
        (themeLink as any).setAttribute('href', '../themes/fabric.css');
      break;
    case 'bootstrap':
        (themeLink as any).setAttribute('href', '../themes/bootstrap.css');
        break;
    case 'tailwind':
        (themeLink as any).setAttribute('href', '../themes/tailwind.css');
        break;
    case 'bootstrap5':
        (themeLink as any).setAttribute('href', '../themes/bootstrap5.css');
        break;
    case 'fluent':
        (themeLink as any).setAttribute('href', '../themes/fluent.css');
  }
});