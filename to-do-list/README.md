# to-do-list API

## project_server endpoint

Запросы на данный ендпоинт всегда обращаются к БД, ведутся CRUD операции

## GET_PROJECT_LIST

получение полного списка проектов пользователя


+ запрос клиента

{
    user_name: 'ruslan',
    type: 'GET_PROJECT_LIST'
}