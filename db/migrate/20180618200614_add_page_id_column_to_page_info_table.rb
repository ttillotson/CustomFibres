class AddPageIdColumnToPageInfoTable < ActiveRecord::Migration[5.2]
  def change

    add_column :page_infos, :page_id, :integer
  end
end
