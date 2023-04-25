# to-do-list API

## project_server endpoint

Запросы на данный ендпоинт всегда обращаются к БД, ведутся CRUD операции

## GET_PROJECT_LIST

получение полного списка проектов пользователя


### request users project list [POST]

+ Client request (application/json)
      
        {
            user_email: "user_email",
            type: "GET_PROJECT_LIST"
        }

### response users project list [POST]

project_id - целочисленное значение, которое будет вставлено в url адрес
error - при возникновени ошибки на сервере, данное поле будет содержать подробности об это оибке, иначе NULL

+ Client request (application/json)
      
        {
            error : NULL,
            project_list : [
                {
                      project_name : "project_name",
                      project_id : 1
                },
            ]
        }