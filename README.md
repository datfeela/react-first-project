# SPA [React Social Network](https://datfeela.github.io/react-social-network)
____
## О проекте
Социальная сеть, построенная в процессе прохождения [авторского курса по React/Redux Дмитрия Кузюбердина](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)  
В социальной сети в данный момент реализованы:  
- Логинизация
- Профиль с возможностью редактирования основной информации, посты (сохраняющиеся только в локальном состоянии ввиду отсутствия поддержки постов со стороны сервера)
- Поиск по пользователям социальной сети, возможность подписаться
- Диалоги 
- Смена темы и языка
____
## В планах
- Возможность логиниться и пользоваться социальной сетью с разных аккаунтов (в данный момент это невозможно из-за API-ключей [для взаимодействия с сервером](https://social-network.samuraijs.com/article/faq_po_api), которые привязываются к каждому аккаунту вручную)
- Страница чата: возможность удалить/оправить в спам сообщения, восстановить сообщения, сайдбар для более удобной навигации по диалогам
- Постепенный переход проекта на TypeScript
____
## Стек
- JS/JSX
- [React](https://facebook.github.io/react/docs/hello-world.html)
- Управление состоянием: [Redux](http://redux.js.org/) ([redux-thunk](https://github.com/gaearon/redux-thunk), [React-redux](https://react-redux.js.org/))
- Управление формами: [Formik](https://formik.org/)
- HTTP-клиент: [Axios](https://axios-http.com/)
- Роутинг: [React Router V6](https://reactrouter.com/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [SASS](http://sass-lang.com/) (CSS / SCSS модули)
