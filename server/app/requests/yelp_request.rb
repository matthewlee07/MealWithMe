require 'json'

class YelpRequest
  def search(location, category = nil)
      yelp_requests_path = "https://api.yelp.com/v3/businesses/search"
      # https://lostisland.github.io/faraday/usage/
      auth_header = "Bearer #{ENV['YELP_API_KEY']}"
      response = Faraday.get(yelp_requests_path, 
        {location: location, categories: category}, 
        {'Authorization': auth_header}
      )
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
end