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

require 'test_helper'

class PageInfoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
