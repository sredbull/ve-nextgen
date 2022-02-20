import { Console, Command, createSpinner } from 'nestjs-console';

import { Page } from '../app/entities/page.entity';
import { Curved } from '../app/entities/page/body/header/curved.entity';

import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Extended } from '../app/entities/page/body/footer/extended.entity';
import { Navigation } from '../app/entities/page/body/navigation.entity';
import { A, RelEnum, TargetEnum } from '../app/entities/common/a.entity';

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
    const curvedRepo: Repository<Curved> = this.connection.getRepository(Curved);
    const extendedRepo: Repository<Extended> = this.connection.getRepository(Extended);  
    const navigationRepo: Repository<Navigation> = this.connection.getRepository(Navigation);  
    const ARepo: Repository<A> = this.connection.getRepository(A);  

    let curved = curvedRepo.create({
      title: 'Curvy header',
      subTitle: 'cool huh?',
    });
    
    curved = await curvedRepo.save(curved);

    let extended = extendedRepo.create({
      title: 'It\'s my footer',
      subTitle: 'ain\'t that right, or what?',
      copyright: 'Sven Roodbol 2022',
    });
    
    extended = await extendedRepo.save(extended);

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
        navigation: await navigationRepo.save(navigationRepo.create({
          title: 'main-navigation',
          items: [
            await ARepo.save(ARepo.create({ href: '/home', rel: RelEnum.NOFOLLOW })),
            await ARepo.save(ARepo.create({ href: '/profile', rel: RelEnum.NOFOLLOW, target: TargetEnum.BLANK }))
          ],
        })),
        main: {
          title: 'main titel',
        },
        sidebar: {
          title: 'sidebar titel',
        },
        footer: extended,
      },
    });

    console.log(await pageRepo.save(page));

    spin.succeed('Seeding done');
  }
}
