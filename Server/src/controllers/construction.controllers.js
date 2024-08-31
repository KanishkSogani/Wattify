import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import axios from "axios";

const getTrafficId = async () => {
    try {
        const response = await axios.get(`https://atlas.microsoft.com/traffic/incident/viewport/json?api-version=1.0&boundingbox=22.682861073196285,75.85731046226029,22.693195237285433,75.86851136654047&boundingzoom=11&overviewbox=22.682861073196285,75.85731046226029,22.693195237285433,75.86851136654047&overviewzoom=11&subscription-key=${process.env.AZURE_KEY}`);
        console.log('Traffic ID Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching traffic ID:', error.message);
        throw new Error('Failed to fetch traffic ID');
    }
};

const getConstruction = asyncHandler(async (req, res, next) => {
    try {
        // Step 1: Get the Traffic Model ID
        const trafficI = await getTrafficId();
        console.log('Traffic ID Response:', trafficI);

        // Validate and extract Traffic Model ID
        const trafficId = trafficI.viewpResp?.trafficState?.['@trafficModelId'];
        if (!trafficId) {
            throw new Error('Traffic Model ID not found in response');
        }

        // Step 2: Get Construction Details using the Traffic Model ID
        const response = await axios.get(`https://atlas.microsoft.com/traffic/incident/detail/json?api-version=1.0&style=s1&boundingbox=22.682861073196285,75.85731046226029,22.693195237285433,75.86851136654047&boundingZoom=11&trafficmodelid=${trafficId}&subscription-key=${process.env.AZURE_KEY}`);
        const data = response.data;

        console.log('Construction Details:', data);
        res.send(new ApiResponse(200, data, 'Data received successfully!'));

    } catch (error) {
        console.error('Error fetching construction details:', error.message);
        next(error); // Pass the error to the next middleware
    }
});


export { getConstruction };