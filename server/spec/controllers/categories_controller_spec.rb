require 'rails_helper'

# https://guides.rubyonrails.org/action_controller_overview.html#controller-naming-convention
RSpec.describe CategoriesController, type: :controller do
    describe "GET categories" do
        it "returns all categories" do
          get :index
          expect(response).to have_http_status(:success)
        end
      end
end
