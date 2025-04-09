import { navigation } from "./common/navigation"
import { footer } from "./common/footer"
//import { gallery as indexPageData} from "./pages/gallery"
import { Preguntas as preguntasPageData } from "./pages/preguntas"

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
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
