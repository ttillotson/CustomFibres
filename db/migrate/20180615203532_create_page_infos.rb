class CreatePageInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :page_infos do |t|
      t.string :title 
      t.string :body, null: false

      t.timestamps
    end
  end
end
