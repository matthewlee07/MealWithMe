require 'json'

class YelpRequest
  def search(location, category = nil, price = nil)
      yelp_requests_path = "https://api.yelp.com/v3/businesses/search"
      # https://lostisland.github.io/faraday/usage/
      auth_header = "Bearer #{ENV['YELP_API_KEY']}"
      query_category = if category.present? then
        category
      else
       'restaurants, All'
      end

      query = {location: location, categories: query_category}

      query[:price] = price.length if price.present?
      response = Faraday.get(yelp_requests_path, 
        query,
        {'Authorization': auth_header}
      )

      parse_search_results(response)
  end

  def categories
    yelp_requests_path = "https://api.yelp.com/v3/categories"
    # https://lostisland.github.io/faraday/usage/
    auth_header = "Bearer #{ENV['YELP_API_KEY']}"
    response = Faraday.get(yelp_requests_path, 
      {},
      {'Authorization': auth_header}
    )
  end

  private
  def parse_search_results(response)
    if response.success? then
      OpenStruct.new({
        status: response.status,
        body: JSON.parse(response.body)['businesses']
      })
    else
      response
    end
  end
end