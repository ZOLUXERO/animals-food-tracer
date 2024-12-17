import { Inject, Injectable, Logger } from '@nestjs/common';
import { DaprClient, DaprServer } from '@dapr/dapr';
import { DogFoodService } from 'src/dog-food/services/dog-food.service';
import { CatFoodController } from 'src/cat-food/controller/cat-food.controller';

@Injectable()
export class DaprService {
  daprClient: DaprClient;
  //daprServer: DaprServer;
  private readonly logger = new Logger(DaprServer.name);

  constructor(
    @Inject('DaprServer') private readonly daprServer: DaprServer,
    private readonly dogFoodService: DogFoodService,
    private readonly catFoodController: CatFoodController,
  ) {
    //const daprHost = "127.0.0.1";
    //const daprPort = "3500";
    //const serverHost = "127.0.0.1";
    //const serverPort = "5002";

    //this.logger.log(`Initializing DaprClient("${daprHost}", ${daprPort})`);
    //this.daprClient = new DaprClient({ daprHost, daprPort });
    //this.daprServer = new DaprServer({
    //  serverHost,
    //  serverPort,
    //  clientOptions: {
    //    daprHost,
    //    daprPort,
    //  },
    //})
  }

  async start() {
    await this.dogFoodService.subs(this.daprServer);
    await this.catFoodController.daprCatListen(this.daprServer);
    await this.daprServer.start().then(() => {
      this.logger.log('[Escuchando] Conectado a dapr...');
    });
  }
}
