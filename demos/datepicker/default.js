define(["require", "exports", "../../src/datepicker/datepicker"], function (require, exports, datepicker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var datepicker = new datepicker_1.DatePicker({
        width: "250px",
        value: new Date('5/7/2018'),
        mobileFullScreenMode: true,
        cssClass: 'e-bigger',
        open: function(){
            setTimeout(()=>{
                debugger;
            },100);
        }
    });
    datepicker.appendTo('#datePicker');
    var themeSelector = document.getElementById('theme-selector');
    var themeLink = document.getElementById('theme');
    themeSelector.addEventListener('change', function () {
        var selectedTheme = themeSelector.value;
        switch (selectedTheme) {
            case 'bootstrap4':
                themeLink.setAttribute('href', '../themes/bootstrap4.css');
                break;
            case 'material':
                themeLink.setAttribute('href', '../themes/material.css');
                break;
            case 'fabric':
                themeLink.setAttribute('href', '../themes/fabric.css');
                break;
            case 'bootstrap':
                themeLink.setAttribute('href', '../themes/bootstrap.css');
                break;
            case 'tailwind':
                themeLink.setAttribute('href', '../themes/tailwind.css');
                break;
            case 'bootstrap5':
                themeLink.setAttribute('href', '../themes/bootstrap5.css');
                break;
            case 'fluent':
                themeLink.setAttribute('href', '../themes/fluent.css');
        }
    });
});
