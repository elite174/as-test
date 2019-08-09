# Aviasales test task

## С чего начать?

Реализацию можно посмотреть [здесь]()

Чтобы запустить локально необходимо:
1) Склонировать репозиторий
2) В папке с проектом запустить **npm i && npm start**
3) Перейти в браузере на localhost:3000

## Структура проекта

Я использовал следующую структуру для данного задания (обычно, свои проекты организую примерно так же):
- **src**
    - **components** - папка с react-компонентами
    - **elements** - здесь находятся небольшие ui-компоненты (то есть кнопки, инпуты, лэйблы; в данном случае там лежит один Checkbox)
    - **api** - здесь находятся функции и константы, необходимые для формирования url-ов запросов
    - **features** - "фичи" проекта. В данном случае у нас есть только одна фича, для неё реализовано хранилище данных
- **public** - здесь лежить сам HTML файл и икнока


## Детали реализации

- Задание было сделано с помощью [Create React App](https://github.com/facebook/create-react-app).
- Для отрисовки списка билетов я использовал виртуализированный лист из  [react-virtualized](https://github.com/bvaughn/react-virtualized), чтобы повысить производительность рендеринга и уменьшить количество DOM-нод на странице
- Для BEM-именования классов я использовал [recn](https://github.com/awinogradov/recn) (обычно, использую **@bem-react**, но здесь не понадобилось такого большого функционала)
- Для формирования immutable-store я использовал [immer](https://github.com/immerjs/immer)

## Доступные команды

### `npm start`

Запуск проекта на localhost:3000

### `npm test`

Запуск тестов

## Остались вопросы?

- Мне можно написать в telegram @VladislavLipatov и на lipatov.xex@gmail.com
