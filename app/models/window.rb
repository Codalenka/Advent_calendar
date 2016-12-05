class Window < ApplicationRecord
  mount_uploader :image, ImageUploader
end
