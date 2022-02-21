import { Console, Command, createSpinner } from 'nestjs-console';

import { Page } from '../app/models/page/page.entity';
import { Curved } from '../app/models/page/body/header/curved/curved.entity';

import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Extended } from '../app/models/page/body/footer/extended/extended.entity';
import { Navigation } from '../app/models/page/body/navigation/navigation.entity';
import { A, RelEnum, TargetEnum } from '../app/models/common/a.entity';
import { Article } from '../app/models/page/body/main/article/article.entity';
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
                aRepo.create({ href: '/home', rel: RelEnum.NOFOLLOW }),
              ),
              await aRepo.save(
                aRepo.create({
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
                markdown: `
                Marked - Markdown Parser
                ========================
                
                [Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.
                
                How To Use The Demo
                -------------------
                
                1. Type in stuff on the left.
                2. See the live updates on the right.
                
                That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:
                
                - **Preview:**  A live display of the generated HTML as it would render in a browser.
                - **HTML Source:**  The generated HTML before your browser makes it pretty.
                - **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
                - **Quick Reference:**  A brief run-down of how to format things using markdown.
                
                Why Markdown?
                -------------
                
                It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,
                
                > The overriding design goal for Markdown's
                > formatting syntax is to make it as readable
                > as possible. The idea is that a
                > Markdown-formatted document should be
                > publishable as-is, as plain text, without
                > looking like it's been marked up with tags
                > or formatting instructions.
                
                Ready to start writing?  Either start changing stuff on the left or
                [clear everything](/demo/?text=) with a simple click.
                
                [Marked]: https://github.com/markedjs/marked/
                [Markdown]: http://daringfireball.net/projects/markdown/                
                `,
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
            copyright: 'Sven Roodbol 2022',
          }),
        ),
      },
    });

    console.log(await pageRepo.save(page));

    spin.succeed('Seeding done');
  }
}
