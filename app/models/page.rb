# == Schema Information
#
# Table name: pages
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Page < ApplicationRecord
    has_many :fields,
    class_name: :PageInfo,
    foreign_key: :page_id
end
