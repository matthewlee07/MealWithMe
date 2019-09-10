class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.integer :min_seats
      t.integer :max_seats
      t.datetime :datetime
      t.string :yelp_id

      t.timestamps
    end
  end
end
