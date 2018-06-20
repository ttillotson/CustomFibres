# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Page Seeds
splash_page = Page.create(name: 'Splash')
tech_page = Page.create(name: "Technique")

# Field Seeds
splash_desc = Field.create(title: 'Description', body: "Splash Body", page_id: splash_page.id)
cover_desc = Field.create(title: 'Cover', body: "Cover Body", page_id: tech_page.id)
fabric_desc = Field.create(title: 'Fabrication', body: "Fabrication Body", page_id: tech_page.id)
materials_desc = Field.create(title: 'Materials', body: "Materials Body", page_id: tech_page.id)