class Interest < ApplicationRecord
  validates :min_seats, presence: true
  validates :max_seats, presence: true
  validates :datetime, presence: true
  validates :yelp_id, presence: true
  validate :max_seats_is_greater_or_equal_to_min_seats

  def max_seats_is_greater_or_equal_to_min_seats
    if min_seats > max_seats
      errors.add(:min_seats, 'cannot be greater than max seats')
    end
  end
end
