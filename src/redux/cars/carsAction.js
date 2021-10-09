import carInfo from '../../carInfo.json';

export const fetchCars = () => {
    return {
        type: "FETCH_CARS",
        payload: carInfo
    }
}
