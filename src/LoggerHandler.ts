import {Level} from "./Level";

export interface LoggerHandler {
    handle(...args:any[]):void;
}