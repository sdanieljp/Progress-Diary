class AddPriorityToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :priority, :string, default: "0", null: false
  end
end
