class UpdateFieldsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :fields, :body, :text
    change_column :fields, :page_id, :integer, null: false
  end
end
