# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Todo.destroy_all
    Step.destroy_all

    titles = ['Groceries', 'Laundry', 'Car wash', 'Make dinner reservation', 'Study for React Assessment 2']
    body = ['Remember to get extra toothpaste', 'whites, blacks then colored pieces on medium heat', 'Thursday morning', 'Saison, 415.828.7990', 'Study sesh at Macallans on Tuesday night']
    
    titles.each_with_index do |title, idx| 
        Todo.create!(title: title, body: body[idx], done: false)  
    end 

    todos = Todo.all

    step_title = ['Brie', 'chicken thighs', 'veg stock', 'greens', 'Redux step by step walkthrough', 'Do the practice test']
    todo_id = [todos[0].id, todos[0].id, todos[0].id, todos[0].id, todos[4].id, todos[4].id]

    step_title.each_with_index do |title, idx| 
        Step.create!(title: title, todo_id: todo_id[idx], done: false)
    end

end