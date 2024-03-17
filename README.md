# Game Design Concepts

[Game Design Concepts Web Site](https://vahpetr.github.io/game-design-concepts/). This project tests my other website scraper project Scrapy Dogs. Scrapy Dogs is app for convert html page to md/docfx/pdf/epub books formats. For testing, I chose [aushestov.ru/шрайбер](http://aushestov.ru/шрайбер/).

## How to use locally

```sh
dotnet tool update -g docfx
docfx build src/docs/docfx.json --serve
```
