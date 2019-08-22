require 'rails_helper'

RSpec.describe HomeController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index,params: { location: 'NYC' }
      expect(response).to have_http_status(:success)
    end
  end

end
