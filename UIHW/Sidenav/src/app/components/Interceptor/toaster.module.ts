import { ModuleWithProviders } from "@angular/core";
import { GlobalConfig } from "rxjs";

export declare class ToastrModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<any>;
}
export declare class ToastrComponentlessModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<any>;
}