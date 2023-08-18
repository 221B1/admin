// 菜单api
import { requestList } from "@/utils/http/axios/Axios";

export function getMenuList(){
    return requestList.get({
        url: '/menu/getMenus'
    })
}