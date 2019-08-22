class HomeController < ApplicationController
  def index
    response = YelpRequest.new.search(params.require(:location), params[:category])
    #https://guides.rubyonrails.org/api_app.html
    data = JSON.parse(response.body)["businesses"].map do |business|
      { name: business["name"], image_url: business["image_url"], 
      category: business["categories"]}
    end
    render json: data
  end
end
