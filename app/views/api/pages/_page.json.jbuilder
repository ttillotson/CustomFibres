json.page do 
    json.set! page.name do 
        json.extract! page, :id, :name
        json.fieldIds do 
            json.array! fields.pluck(:id)
        end
    end
end

# json.extract! page, :id, :name
# json.fieldIds do 
#     json.array! fields.pluck(:id)
# end


json.fields do 
    fields.each do |field|
        json.set! field.id do 
            # json.extract! field, :id, :title, :body, :page_id
            json.partial! 'api/fields/field', field: field, page: page
        end
    end
end


# json.extract! fields, :id, :title, :body
