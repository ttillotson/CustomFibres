json.extract! field, :id, :title, :body, :page_id, :last_updated
json.extract! page, :name
json.images do 
    json.array! field.images do |image|
        json.extract! image, :signed_id, :service_url
    end
end
