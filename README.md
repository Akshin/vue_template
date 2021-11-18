# VUE 2 TEMPLATE

## Настройка проекта

Каждая страница - абстрактное app приложение со своим routes, store, components, data. 
/src/apps/{appname}
- routes - массив роутов для данного приложения. Подключяется в корневом роуте (/src/router/index).
- store - модуль vuex для данного приложения. Подключается в корневом сторе (/src/store/index)
- data, components - конфиги и компоненты для данного приложения. 

Глобальные компоненты, конфиги находятся вне src/app/. 
Глобальные компоненты - это чистые компоненты, без внешних зависимостей.


В проекте используются порталы для того, чтобы не городить шины событий и глобальные состояния для управления леяутами.
https://www.npmjs.com/package/portal-vue

Настроена локализация, в том числе и для vuitify компонентов (/src/locale)
https://kazupon.github.io/vue-i18n/

Все методы по работе с данными описываются в (/src/utils/date)
https://date-fns.org/

Запросы к api (/src/api/)
https://www.npmjs.com/package/axios

Vuitify для всего остального (/src/plugins/vuetify)
https://vuetifyjs.com/en/

Валидация вне компонентов инпутов
https://vuelidate.js.org/#getting-started

Mitt если нужна шина событий. (weighs less than 200 bytes gzipped).
Чтобы не использовать для этого отдельный инстанс Vue. 
https://www.npmjs.com/package/mitt

Добавить .env в .gitignore
