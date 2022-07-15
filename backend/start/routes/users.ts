import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/create', 'UsersController.create')
  Route.get('/readAll', 'UsersController.readAll')
  Route.get('/readOne/:id', 'UsersController.readOne')
  Route.put('/update/:id', 'UsersController.update')
  Route.delete('/delete/:id', 'UsersController.delete')
}).prefix('/users')
