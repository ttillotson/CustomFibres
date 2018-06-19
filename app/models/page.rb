# == Schema Information
#
# Table name: pages
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Page < ApplicationRecord
    has_many :fields,
    class_name: :Field,
    foreign_key: :page_id
end
