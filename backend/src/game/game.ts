import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer } from 'ws';
import User from '../user';

export default class Game {
    name: string;
    id: string;
    players: Array<User>; 
    teams: any; 
    currentTasks: any; 
    nextTasks: any;


    constructor(
        name: string, 
        id: string, 
        players: Array<User>, 
        teams: any, 
        currentTasks: any, 
        nextTasks: any
    ) {
        this.name = name;
        this.id = id; 
        this.players = players;
        this.teams = teams; 
        this.currentTasks = currentTasks; 
        this.nextTasks = nextTasks;
    }

    update(wss: WebSocketServer) {
        
    }
}