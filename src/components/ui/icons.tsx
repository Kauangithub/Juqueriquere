import seta         from '../../assets/icons/seta1.webp';
import setaDark     from '../../assets/icons/seta12.webp';
import setaBackLight     from '../../assets/icons/setaBackLight.webp';
import setaBackDark     from '../../assets/icons/setaBackDark.webp';
import QRDark       from '../../assets/icons/qr_code_scanner.webp';
import QR           from '../../assets/icons/QR-hover.webp';
import home         from '../../assets/icons/Home.webp';
import menu         from '../../assets/icons/Menu.webp';
import XDark        from '../../assets/icons/X.webp';
import X            from '../../assets/icons/X-dark.webp';
import Explorar     from '../../assets/icons/Explorar.webp';
import Sobre        from '../../assets/icons/Sobre.webp';
import Dificuldade  from '../../assets/icons/Dificuldade-light.webp';
import Distancia    from '../../assets/icons/Distancia-light.webp';
import Tempo        from '../../assets/icons/Tempo-light.webp';
import DificuldadeDark  from '../../assets/icons/Dificuldade.webp';
import DistanciaDark    from '../../assets/icons/Distancia.webp';
import TempoDark        from '../../assets/icons/Tempo.webp';

export const icons = {
        "default": {
            "seta"          : seta,
            "setaBack"      : setaBackDark,
            "QR"            : QR,
            "Home"          : home,
            "Menu"          : menu,
            "X"             : X,
            "Explorar"      : Explorar,
            "Sobre"         : Sobre,
            "Dificuldade"   : Dificuldade,
            "Distancia"     : Distancia,
            "Tempo"         : Tempo
        },
        "dark": {
            "seta"          : setaDark,
            "setaBack"      : setaBackLight,
            "QR"            : QRDark,
            "Home"          : home,
            "Menu"          : menu,
            "X"             : XDark,
            "Explorar"      : Explorar,
            "Sobre"         : Sobre,
            "Dificuldade"   : DificuldadeDark,
            "Distancia"     : DistanciaDark,
            "Tempo"         : TempoDark
        },
         "none": {
            "seta"          : setaDark,
            "setaBack"      : setaBackLight,
            "QR"            : QRDark,
            "Home"          : home,
            "Menu"          : menu,
            "X"             : XDark,
            "Explorar"      : Explorar,
            "Sobre"         : Sobre,
            "Dificuldade"   : Dificuldade,
            "Distancia"     : Distancia,
            "Tempo"         : Tempo
        }
} as any;