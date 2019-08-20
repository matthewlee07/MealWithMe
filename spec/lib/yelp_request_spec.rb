require 'spec_helper'
require 'faraday'
require 'yelp_request.rb'

RSpec.describe "YelpRequests", type: :request do
  describe "GET /yelp_requests" do
    it "works! (now write some real specs)" do
      response = YelpRequest.new.search

      expect(response.body).to_not include('error')
      expect(response.status).to equal(200)
    end
  end
end
