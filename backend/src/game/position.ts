
export default class Position {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude
        this.latitude = latitude;
    }
    
    static positionFrom(position: any): Position {
        return(new Position(position.longitude, position.latitude))
    }
}