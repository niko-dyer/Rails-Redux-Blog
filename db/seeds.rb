50.times do
    Blog.create(
        name: Faker::Beer.name,
        body: Faker::Lorem.paragraph
    )
end

puts "Data seeded"