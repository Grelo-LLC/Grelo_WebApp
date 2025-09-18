import { REQUEST } from "@/config/config"
import { ENDPOINTS } from "@/config/endpoints"


export const fetchProducts = async () => {
    const response = await REQUEST.get(ENDPOINTS.MY_PROFILE());
    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        console.log(element.title);
    }
}