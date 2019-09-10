class InterestsController < ApplicationController
  before_action :set_interest, only: [:update, :destroy]

  # POST /interests
  def create
    yelp_id = create_interest_params.require(:yelp_id)
    input_interests = create_interest_params.require(:interests)
    interests = input_interests.map do |interest_param|
      interest = Interest.new(interest_param.merge(yelp_id: yelp_id))
    end

    all_saved = interests.all? {|interest|  interest.save }
    if all_saved
      all_interests_for_restaurant = Interest.where(yelp_id: yelp_id)
      render json: all_interests_for_restaurant, status: :created
    else
      render json: interests.map(&:errors), status: :unprocessable_entity
    end
  end

  # PATCH/PUT /interests/1
  def update
    if @interest.update(interest_params)
      render json: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interests/1
  def destroy
    @interest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interest
      @interest = Interest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def create_interest_params
      params.permit(:yelp_id, :interests => [:min_seats, :max_seats, :datetime])
    end
    def interest_params
      params.require(:interest).permit(:min_seats, :max_seats, :datetime)
    end
end
