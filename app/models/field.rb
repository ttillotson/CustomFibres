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
    scope :with_eager_loaded_images, -> { eager_load(images: :blob) }

    belongs_to :page,
    class_name: :Page,
    foreign_key: :page_id

    has_many_attached :images

    def page_name 
        page.name
    end

    def last_updated
        updated_at.in_time_zone("Pacific Time (US & Canada)").strftime("%m/%d/%y %r")
    end
end
