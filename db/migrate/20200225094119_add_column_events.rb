class AddColumnEvents < ActiveRecord::Migration[6.0]
  def up
    add_column :events, :start_date, :datetime
    add_column :events, :end_date, :datetime
  end

  def down
    remove_column :events, :start_date, :datetime
    remove_column :events, :end_date, :datetime
  end
end
