# == Schema Information
#
# Table name: page_infos
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  page_id    :integer
#

class PageInfo < ApplicationRecord
    belongs_to :page,
    class_name: :Page,
    foreign_key: :page_id
end
