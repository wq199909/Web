import { matchRoutes } from "react-router-config"
import routeConfig from "@/routes/RouteConfig"

export default async function loadData(path, store){
    const matchs = matchRoutes(routeConfig, path);
    let proms = [];
    for (const match of matchs) {
        if(match.route.component.loadData){
            proms.push(Promise.resolve(match.route.component.loadData(store)))
        }
    }
    return Promise.all(proms);
}