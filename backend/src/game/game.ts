import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer } from 'ws';
import User from '../user';
import Task from './task';
import Team from './team';

export default class Game {
    name: string;
    id: string;
    players: Array<User>; 
    teams: Array<Team>; 
    currentTasks: Array<Task>;
    nextTasks: Array<Task>;


    constructor(
        name: string, 
        id: string, 
        players: Array<User>, 
        teams: Array<Team>, 
        currentTasks: Array<Task>, 
        nextTasks: Array<Task>
    ) {
        this.name = name;
        this.id = id; 
        this.players = players;
        this.teams = teams; 
        this.currentTasks = currentTasks; 
        this.nextTasks = nextTasks;
    }

    update(wss: WebSocketServer) {
        let test: 
    }
}