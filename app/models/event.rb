class Event < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { maximum: 30 }

  belongs_to :user

  scope :recent, -> { order(created_at: :desc) }
end
