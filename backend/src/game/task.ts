import Location from "./location";

export default class Task {
    name: string; 
    description: string;
    ammennities: Array<string>;
    location: Location;
    
    constructor(name: string, description: string, ammennities: Array<string>, location: Location) {
        this.name = name;
        this.description = description;
        this.ammennities = ammennities;
        this.location = location;
    }
}