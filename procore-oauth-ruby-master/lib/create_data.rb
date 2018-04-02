class Createdata < ActiveRecord::Migration[5.1]
  def self.up
    create_table :data do |t|
      t.string :name
    end
  end

  def self.down
    drop_table :data
  end
end
