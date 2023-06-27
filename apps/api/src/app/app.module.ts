import { Module } from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import load from "./config/load";

  @Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: process.env.NODE_ENV === "production",
    load: [load]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
