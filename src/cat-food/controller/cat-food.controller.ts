import { DaprServer, HttpMethod } from '@dapr/dapr';
import { Controller, Get, Res } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Response } from 'express';

@Controller('cat-food')
export class CatFoodController {

  daprServer: DaprServer;

  @Get()
  async getCatFoot(@Res() response: Response) {
    console.log("returning sardines");
    return response.status(HttpStatusCode.Ok).send("sardines");
  }

  async daprCatListen(daprServer: DaprServer) {
    this.daprServer = daprServer;
    await this.daprCatFood();
  }

  async daprCatFood() {
    await this.daprServer.invoker.listen(
      "hello-world",
      async () => {
        console.log("Recivido get cat food...");
        return { hello: "comida recibida..." };
      },
      { method: HttpMethod.GET }
    );
  }
}
