class FixStepsColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :steps, :todo_id, :string
    add_column :steps, :todo_id, :integer
  end
end
