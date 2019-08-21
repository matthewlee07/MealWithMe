require 'spec_helper'
require 'category_filter'

describe CategoryFilter do
  it 'filters out restaraunts' do
    categories = [{
      'parent_aliases' => ['local_services']
    }, {
      'parent_aliases' => ['restaurants']
    }]

    filter = CategoryFilter.new(categories)
    restaurant = filter.restaurants()[0]

    expect(restaurant).to_not be_nil
    expect(filter.restaurants()[0]['parent_aliases']).to include('restaurants') 
  end
end