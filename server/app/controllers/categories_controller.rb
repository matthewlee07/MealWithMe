require 'yelp_request'
require 'category_filter'
class CategoriesController < ApplicationController
  def index
    raw_response = YelpRequest.new.categories
    yelp_categories = JSON.parse(raw_response.body)['categories']
    restaurants_categories = CategoryFilter.new(yelp_categories).restaurants
    render json: restaurants_categories
  end
end