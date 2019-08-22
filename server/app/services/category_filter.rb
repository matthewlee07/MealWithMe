class CategoryFilter
  def initialize(categories)
    @categories = categories
  end

  def restaurants
    @categories.filter do |category| 
      category['parent_aliases'].include?('restaurants')
    end
  end
end