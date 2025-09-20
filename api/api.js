import { REQUEST } from "@/config/config"
import { ENDPOINTS } from "@/config/endpoints"

// TODO General Information Data
export const fetchGreloInformation = async () => {
    try {
        const response = await REQUEST.get(ENDPOINTS.GENERAL_INFO());
        return response;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};


// TODO Products Data
export const fetchProductsData = async () => {
    try {
        const response = await REQUEST.get(ENDPOINTS.STORE_PRODUCTS());
        return response.results;
    } catch (error) {
        console.log("Error fetching data:", error);
        return [];
    }
}