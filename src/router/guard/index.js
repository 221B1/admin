import { createPermissonGuard } from "./permissonGuard";

export async function setupRouterGuard(router){
    createPermissonGuard(router)
}