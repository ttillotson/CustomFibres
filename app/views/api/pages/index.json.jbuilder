@pages.each do |page|
    page_fields = @fields.select{ |field| page.fields.include?(field)}
    json.partial! 'api/pages/page', page: page, fields: page_fields 
end
