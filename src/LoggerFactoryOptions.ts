import {LoggerHandler} from "./LoggerHandler";
import {Logger} from "./Logger";

export interface LoggerFactoryOptions {
    root:Logger;
    handlers:{[name:string]:LoggerHandler};
    loggers:{[name:string]:Logger};
}