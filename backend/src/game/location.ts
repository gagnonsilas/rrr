import Position from "./position";

export default class Location {
    position: Position;
    ammenities: Array<string>

    constructor(position: Position, ammenities: Array<string>) {
        this.position = position;
        this.ammenities = ammenities;
    }
}