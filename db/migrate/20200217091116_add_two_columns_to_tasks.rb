class AddTwoColumnsToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :deadline, :datetime
    add_column :tasks, :progress, :integer
  end
end
