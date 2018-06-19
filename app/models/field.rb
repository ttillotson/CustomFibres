# == Schema Information
#
# Table name: fields
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  page_id    :integer
#

class Field < ApplicationRecord
    belongs_to :page,
    class_name: :Page,
    foreign_key: :page_id
end
