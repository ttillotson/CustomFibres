json.page do 
    json.set! page.name do 
        json.extract! page, :id, :name
        json.fieldIds do 
            debugger
            json.array! fields.pluck(:id).uniq
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