import { Console, Command, createSpinner } from 'nestjs-console';

import { Page } from '../app/entities/page.entity';
import { SourceType } from '../app/entities/page/body/header.entity';
import { Curved } from '../app/entities/page/body/header/curved.entity';

import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

@Console()
export class SeedService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Command({
    command: 'seed',
    description: 'Seed DB',
  })
  async seed(): Promise<void> {
    const spin = createSpinner();

    spin.start('Seeding the DB');

    const pageRepo: Repository<Page> = this.connection.getRepository(Page);
    const curvedRepo: Repository<Curved> =
      this.connection.getRepository(Curved);

    let curved = curvedRepo.create({
      title: 'Curvy header',
      subTitle: 'cool huh?',
    });
    
    curved = await curvedRepo.save(curved);

    const page = pageRepo.create({
      lang: 'en',
      head: {
        title: 'Mijn nieuwe titel',
        meta: {
          description: 'Een nieuwe omschrijving',
          noindex: true,
        },
      },
      body: {
        header: curved,
        navigation: {
          title: 'navigation titel',
        },
        main: {
          title: 'main titel',
        },
        sidebar: {
          title: 'sidebar titel',
        },
        footer: {
          title: 'footer titel',
        },
      },
    });

    console.log(await pageRepo.save(page));

    spin.succeed('Seeding done');
  }
}
