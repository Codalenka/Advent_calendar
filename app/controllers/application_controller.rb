class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @window = Window.find(params[:id])
  end
end
