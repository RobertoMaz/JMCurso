const d = document;
const ua = navigator.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id);
    const isMobile = {
        android : () => ua.match(/android/i),
        ios : () => ua.match(/iphone|ipad|ipod/i),
        windows : () => ua.match(/windows phone/i),
        any : function () {
            return this.android() || this.ios() || this.windows();

        }
    };
    const isDesktop = {
        linux : () => ua.match(/linux/i),
        mac : () => ua.match(/mac os/i),
        windows : () => ua.match(/windows nt/i),
        any : function () {
            return this.linux() || this.mac() || this.windows();
        }

    };
    const isBrowser = {
        chrome : () => ua.match(/chrome/i),
        safari : () => ua.match(/safari/i),
        firefox : () => ua.match(/firefox/i),
        opera : () => ua.match(/opera|opera mini/i),
        ie : () => ua.match(/msie|iemobile/i),
        edge : () => ua.match(/edge/i),
        any : function () {
            return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera();
        }
    };
    /*
    console.log(isMobile.any());
    console.log(isDesktop.any());
    console.log(isBrowser.any());*/

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Este contenido es para windonws de escritorio.</mark></p>`;
    }

    if(isMobile.android()){
        $id.innerHTML += `<p><mark>Este contenido es para android.</mark></p>`;
    }

    if(isMobile.ios()){
        $id.innerHTML += `<p><mark>Este contenido es para ios.</mark></p>`;
    }

    /*
    if(isMobile.android()){
        window.location.href = "https://youtube.com";
    }*/
    
}