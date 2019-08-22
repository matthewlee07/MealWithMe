require 'spec_helper'
require 'faraday'
require 'yelp_request.rb'

RSpec.describe "YelpRequests", type: :request do
  describe "#search" do
    it "can search for places in NYC" do
      response = YelpRequest.new.search('NYC')

      expect(response.body).to_not include('error')
      expect(response.status).to equal(200)
    end
    it "can search for Italian places in NYC" do
      response = YelpRequest.new.search('NYC', 'Italian')

      expect(response.body).to_not include('error')
      expect(response.status).to equal(200)
    end
  end

  describe "#categories" do 
    it "returns all categories" do 
      response = YelpRequest.new.categories
        
      expect(response.body).to_not include('error')
      expect(response.status).to equal(200)
    end
  end
end
