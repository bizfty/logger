import {LoggerHandler} from "./LoggerHandler";
import {Level} from "./Level";
export class BrowserConsoleHandler implements LoggerHandler{

    handle(...args:any[]) {
        console.log(args);
    }
}