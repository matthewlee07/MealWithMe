require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "GET /homes" do
    it "works! (now write some real specs)" do
      get root_path(location: 'NYC')
      expect(response).to have_http_status(200)
    #   expect(response.body[0]['name']).to exist
    #http://rubydoc.info/gems/rspec-expectations/frames
    json = JSON.parse(response.body)
      expect(json[0]['name']).to_not be_nil
      expect(json[0]['image_url']).to_not be_nil
    end
  end
end
