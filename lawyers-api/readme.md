# Express TV API

![](https://media.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif)

Lets take a step back and review express. We are going to make an API to create, view, update and delete TV Shows! 

Try to complete the API without copying and pasting from previous work. Use them as a reference, but type it all out yourself.

## App Structure

|method|route|model method|controller method|
|:----|:---:|:----------:|--------:|
|GET|`/shows`|`show.getAll`|`sendShows`|
|POST|`/shows`|`show.create`|`sendShow`|
|PUT|`/shows/:id`|`show.update`|`sendShow`|
|DELETE|`/show/:id`|`show.delete`|`sendSuccess`|

## What you need to do:

`npm install`

#### Database

Make sure your `db/config.js` file is using your username.

Fill out your seed file. You will need to create a database and a table for your shows. Your table should have columns for each show's: `id`, `name`, `description`, `image` and `rating`. Add a couple shows to your database so you can test out your api later.

`psql -f db/seed.sql`

#### Model

Fill out your model. Take a look at the table above to see what methods you need. Remember to export your model!

#### Controller 

Create your controller methods (see above) that will render the json needed. Add your routes and use the appropriate model middleware and controller middleware for each. Remember to set up your controller in `index.js`!

#### Does it work!?

Run ( `nodemon index.js` ) your api and test it using postman! You should be able to `GET` all of your shows, `POST` a new show, `PUT` a show to edit it and `DELETE` a show.


