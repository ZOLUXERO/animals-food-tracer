import { Module } from "@nestjs/common";
import { DaprService } from "./dapr.service";

@Module({
  imports: [],
  // List of imported modules

  // List of controllers
  controllers: [],

  // Providers that will be instantiated by the Nest injector and that may be shared at least across this module
  providers: [DaprService],

  // which providers can be used in other modules?
  exports: [DaprService]
})
export class DaprModule { }
