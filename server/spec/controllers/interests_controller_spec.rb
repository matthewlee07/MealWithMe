require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.
#
# Also compared to earlier versions of this generator, there are no longer any
# expectations of assigns and templates rendered. These features have been
# removed from Rails core in Rails 5, but can be added back in via the
# `rails-controller-testing` gem.

RSpec.describe InterestsController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Interest. As you add validations to Interest, be sure to
  let(:fixed_date) { Time.parse("2010-01-01") }
  let(:yelp_id) { "123" }
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      min_seats:"4",
      max_seats:"8",
      datetime: fixed_date.iso8601
    }
  }

  let(:invalid_attributes) {
    {
      min_seats:"8",
      max_seats:"4",
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # InterestsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  let(:existing_interest) { Interest.create!(valid_attributes.merge(yelp_id: yelp_id)) }

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Interest" do
        expect {
          post :create, params: { yelp_id: yelp_id, interests: [valid_attributes]}, session: valid_session
        }.to change(Interest, :count).by(1)
      end

      it "renders a JSON response with the new interest" do

        post :create, params: { yelp_id: yelp_id, interests: [valid_attributes]}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new interest" do

        post :create, params: { yelp_id: yelp_id, interests: [invalid_attributes]}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested interest" do
        interest = existing_interest
        put :update, params: {id: interest.to_param, interest: new_attributes}, session: valid_session
        interest.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the interest" do
        interest = existing_interest

        put :update, params: {id: interest.to_param, interest: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the interest" do
        interest = existing_interest

        put :update, params: {id: interest.to_param, interest: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested interest" do
      interest = existing_interest
      expect {
        delete :destroy, params: {id: interest.to_param}, session: valid_session
      }.to change(Interest, :count).by(-1)
    end
  end

end