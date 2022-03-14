import { Console, Command, createSpinner } from 'nestjs-console';
import { Page } from '../app/models/page/page.entity';
import { Curved } from '../app/models/page/body/header/curved/curved.entity';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Extended } from '../app/models/page/body/footer/extended/extended.entity';
import { Navigation } from '../app/models/page/body/navigation/navigation.entity';
import { A, RelEnum, TargetEnum } from '../app/models/common/a.entity';
import { Markdown } from '../app/models/page/body/main/article/markdown/markdown.entity';

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
    const extendedRepo: Repository<Extended> =
      this.connection.getRepository(Extended);
    const navigationRepo: Repository<Navigation> =
      this.connection.getRepository(Navigation);
    const aRepo: Repository<A> = this.connection.getRepository(A);
    const markdownRepo: Repository<Markdown> =
      this.connection.getRepository(Markdown);

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
        header: await curvedRepo.save(
          curvedRepo.create({ title: 'Curvy header', subTitle: 'cool huh?' }),
        ),
        navigation: await navigationRepo.save(
          navigationRepo.create({
            title: 'main-navigation',
            items: [
              await aRepo.save(
                aRepo.create({
                  name: 'Home',
                  href: '/home',
                  rel: RelEnum.NOFOLLOW,
                }),
              ),
              await aRepo.save(
                aRepo.create({
                  name: 'Profile',
                  href: '/profile',
                  rel: RelEnum.NOFOLLOW,
                  target: TargetEnum.BLANK,
                }),
              ),
            ],
          }),
        ),
        main: {
          articles: [
            await markdownRepo.save(
              markdownRepo.create({
                title: 'My first article',
                subTitle: 'A brief example of a markdown article',
                markdown: `# H1
## H2
### H3
#### H4
##### H5
##### H6
* A list
* **bold**
* *italic*
* \`code\`
* [Link](http://localhost:3000/home)
* ...`,
              }),
            ),
          ],
        },
        sidebar: {
          title: 'sidebar titel',
        },
        footer: await extendedRepo.save(
          extendedRepo.create({
            title: "It's my footer",
            subTitle: "ain't that right, or what?",
            copyright: '© 2022, Sven Roodbol',
          }),
        ),
      },
    });

    console.log(await pageRepo.save(page));

    spin.succeed('Seeding done');
  }
}
