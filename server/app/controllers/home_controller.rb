require 'yelp_request'
class HomeController < ApplicationController
  def index
    response = YelpRequest.new.search(params.require(:location), params[:category], params[:price])
      data = response.body.map do |business|
        {
          id: business["id"], 
          name: business["name"],
          image_url: business["image_url"], 
          url: business["url"], 
          category: business["categories"], 
          rating: business["rating"], 
          review_count: business["review_count"], 
          coordinates: business["coordinates"], 
          price: business["price"],
          location: business["location"]
        }
      end
    render json: data
  end
end
