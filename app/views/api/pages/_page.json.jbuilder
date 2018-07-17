json.page do 
    json.set! page.name do 
        json.extract! page, :id, :name
        json.fieldIds do 
            json.array! fields.pluck(:id).uniq
        end

        json.mastImage do 
            if page.mast_image.attached?
                json.extract! page.mast_image, :service_url, :signed_id
            else 
                json.null!
            end
        end

        json.images do 
            json.array! page.images do |image|
                json.imageUrl image.service_url
                json.extract! image, :sign_id
            end
        end
    end
end

json.fields do 
    fields.each do |field|
        json.set! field.id do 
            json.partial! 'api/fields/field', field: field, page: page
        end
    end
end