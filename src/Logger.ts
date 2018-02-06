import {Level} from "./Level";
import {LoggerHandler} from "./LoggerHandler";
import {LoggerFactory} from "./LoggerFactory";

export class Logger {
    private factory:LoggerFactory;
    /**
     *
     */
    private _name:string;
    /**
     *  level
     */
    private _level:Level;
    /**
     *  logger handler names
     */
    private _hanlers:LoggerHandler[];

    constructor(level:Level,name:string,handlers:LoggerHandler[]){
        this._hanlers  = handlers;
        this._level    = level;
        this._name     = name;
    }
    public trace(...args:any[]){
        this.invoke(Level.TRACE,args);
    }
    public debug(...args:any[]){
        this.invoke(Level.DEBUG,args);
    }
    public info(...args:any[]){
        this.invoke(Level.INFO,args);
    }
    public warn(...args:any[]){
        this.invoke(Level.WARN,args);
    }
    public error(...args:any[]){
        this.invoke(Level.ERROR,args);
    }
    public time(label:string){

    }
    public timeEnd(label:string){

    }
    private invoke(level:Level, ...args:any[]):void{
        if(this._hanlers && this._hanlers.length>0 && !(Level[this._level] > Level[level])){
            this._hanlers.forEach((handler)=>{
                handler.handle(args);
            });
        }
    }
}