class ChangeTasksToEvents < ActiveRecord::Migration[6.0]
  def change
    rename_table :tasks, :events
  end
end
