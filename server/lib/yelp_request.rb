class YelpRequest
  def search
      yelp_requests_path = "https://api.yelp.com/v3/businesses/search"
      # https://lostisland.github.io/faraday/usage/
      auth_header = "Bearer #{ENV['YELP_API_KEY']}"
      response = Faraday.get(yelp_requests_path, 
        {location: 'LA'}, 
        {'Authorization': auth_header}
      )
  end
end