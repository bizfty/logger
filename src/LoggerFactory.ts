import {Logger} from "./Logger";
import {Level} from "./Level";
import {LoggerFactoryOptions} from "./LoggerFactoryOptions";
import {BrowserConsoleHandler} from "./BrowserConsoleHandler";


export class LoggerFactory {
    private static LoggerFactoryOptionsValueName = "LoggerFactoryConfig";
    private static instance:LoggerFactory;
    private options:LoggerFactoryOptions;
    public static getLogger(name?:string){
        if(!LoggerFactory.instance){
            LoggerFactory.instance = new LoggerFactory();
            if(!LoggerFactory.instance.options) {
                if (!!(<any>window)[LoggerFactory.LoggerFactoryOptionsValueName]) {
                    LoggerFactory.instance.options = (<any>window)[LoggerFactory.LoggerFactoryOptionsValueName];
                } else {
                    LoggerFactory.instance.options = LoggerFactory.instance.createDefaultConfig();
                }
            }
        }
        if(!name){
            return LoggerFactory.instance.options.root;
        }
        if(!LoggerFactory.instance.options.loggers[name]){
            return LoggerFactory.instance.options.root;
        }else {
            return LoggerFactory.instance.options.loggers[name];
        }
    }

    private createDefaultConfig():LoggerFactoryOptions{
        let consoleHanlder = new BrowserConsoleHandler();
        let config:LoggerFactoryOptions = {
            root:new Logger(Level.ERROR,"root",[consoleHanlder]),
            handlers:{"console":consoleHanlder},
            loggers:{}
        };
        return config;
    }
}