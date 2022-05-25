import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj_digital.js";
import {moveBall, shortCuts} from "./eventos_del_teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./btn_dark.js";
import responsiveMedia from "./responsive_video_gps.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_de_dispositivos.js";
import networkStatus from "./deteccion_de_conexion.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilters from "./filtros_de_busqueda.js";
import draw from "./Sorteo.js";
import slider from "./slider.js";


const d=document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/perforar_1.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "Jul 17, 2022 15:00:50", "Feliz cumple años!!");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=fJ9rUzIMcZQ" target="_blank">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/4FKtupB4CzMecwjP6" target="_blank">Ver Maps</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4978538767273!2d-58.480285599999995!3d-34.76824009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1e16605f99f%3A0x81e6de9bef4253d8!2sLagos%20Garc%C3%ADa%204470%2C%209%20de%20Abril%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1652384245718!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    getGeoLocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
})

d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
