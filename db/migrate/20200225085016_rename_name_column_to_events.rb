class RenameNameColumnToEvents < ActiveRecord::Migration[6.0]
  def change
    rename_column :events, :name, :title
  end
end
