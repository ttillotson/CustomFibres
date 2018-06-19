class RenamePageInfo < ActiveRecord::Migration[5.2]
  def change
    rename_table :page_infos, :fields
  end
end
