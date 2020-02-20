class ChangeTasksPriorityDefaultToNull < ActiveRecord::Migration[6.0]

  def up
    change_column :tasks, :priority, :string, default: nil
  end

  def down
    change_column :tasks, :priority, :string, default: "0"
  end
end
