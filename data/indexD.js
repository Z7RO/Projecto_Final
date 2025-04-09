import { navigation } from "./common/navigation"
import { footer } from "./common/footer"
import { gallery as indexPageData} from "./pages/gallery"
import { Preguntas as preguntasPageData } from "./pages/preguntas"
import { eventos } from "./pages/eventos.js";
import { eventosP } from "./pages/eventosp.js";

export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navigation,
        ...footer
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/galeria.html':
            pageVariables = indexPageData
            break;
        case '/preguntas.html':
            pageVariables = preguntasPageData
            break;
            case '/eventos.html':
            pageVariables = { eventos, eventosP };
            break;
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
