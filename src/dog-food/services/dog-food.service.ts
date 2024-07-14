//import { DaprService } from 'src/dapr/dapr.service';
import { Injectable } from '@nestjs/common';
import { DaprServer } from '@dapr/dapr';

@Injectable()
export class DogFoodService {

  daprServer: DaprServer;
  readonly pubsubName = "dogpubsub";
  readonly pubsubTopic = "food";

  constructor(
    //   private readonly daprService: DaprService,
  ) { }

  async subs(daprServer: DaprServer) {
    console.log("Starting Subscriber");
    this.daprServer = daprServer;
    await this.getFood();
    console.log("Subscriber started");
  }


  async getFood() {
    this.daprServer.pubsub.subscribe(
      this.pubsubName,
      this.pubsubTopic,
      async (data) => {
        console.log("Subscriber received: " + JSON.stringify(data));
      }
    );
  }
}
