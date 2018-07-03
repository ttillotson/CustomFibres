json.extract! field, :id, :title, :body, :page_id, :page_name, :last_updated
json.images do 
    json.array! field.images do |image|
        json.url image.service_url
    end
end
