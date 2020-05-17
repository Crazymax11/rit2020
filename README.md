# Проект с кодом из доклада "Эффективное тестирование вёрстки, РИТ++2020"

- Код компонента, его историй и его тестов - `src/features/Search`
- `npm run storybook` для запуска сторибука
- `npx loki test` для запуска loki.js. Работает только с работающим сторибуком и докером в системе
- `npm run test` для запуска автотестов

## Полезные ссылки из доклада

### Полезные знания

- [Write tests. Not too many. Mostly integration](https://twitter.com/rauchg/status/807626710350839808)
- [Kent C. Dodds, Трофей тестирования](https://kentcdodds.com/blog/write-tests)
- [Мартин Фаулер о PageObject](https://martinfowler.com/bliki/PageObject.html)
- [Выпуск underjs про актуальность юнит-тестов](https://underjs.ru/podcast/2020/04/28/unit-tests.html)
- [Дмитрий Коваленко. Unit tests are useless. Change my mind.](https://www.youtube.com/watch?v=9z4Qs7kVOyw&list=LLTLdNzvROtMd883L5CimSHg)
- Пирамида тестирования
    - [Один из первых постов Майка Кона о пирамиде тестирования](https://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid)
    - [Мартин Фаулер о пирамиде тестирования на практике](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Мартин Фаулер о само-тестирующимся коде](https://martinfowler.com/bliki/SelfTestingCode.html)

### Инструменты тестирования фронтенда

- Фреймворки
    - [jest](https://jestjs.io/)
    - mocha+chai+sinon
        - [mocha](https://mochajs.org/)
        - [chai](https://www.chaijs.com/)
        - [sinon](https://sinonjs.org/)
    - [ava](https://github.com/avajs/ava)
- Моки
    - Сеть
        - [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
        - [nock](https://github.com/nock/nock)
    - Файловая система
        - [mock-fs](https://github.com/tschaub/mock-fs)
    - [mongo-unit](https://github.com/mikhail-angelov/mongo-unit)
- [testing-library - набор инструментов для эффективного тестирования DOM](https://testing-library.com/)
- браузерные тесты
    - Низкоуровневые инструменты
        - [selenium - инструмент управления браузерами](https://www.selenium.dev/)
            - Фреймворки e2e тестирования поверх selenium
                - [nightwatch.js](https://nightwatchjs.org/)
                - [webdriver.io](https://webdriver.io/)
        - [puppeteer - инструмент управления google chrome](https://github.com/puppeteer/puppeteer)
        - [playwright - инструмент управления google chrome, firefox, webkit](https://github.com/microsoft/playwright)
    - Фреимворки
        - [cypress](https://www.cypress.io/)
        - [testcafe](https://devexpress.github.io/testcafe/)
- [storybook](https://storybook.js.org/docs/testing/automated-visual-testing/)
    - [Список инструментов для скриншот-тестов](https://storybook.js.org/docs/testing/automated-visual-testing/)
    - [loki](https://loki.js.org/)
    - [creevey](https://github.com/wKich/creevey)
    - [percy](https://percy.io/)