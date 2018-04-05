class CommentsController < ApplicationController
  before_action :set_post

  def index
    @comments = @post.comments
  end

  def create

  end


  private
  def set_post
    @post = Post.find(params[:id])
  end

  def comments_params
    params.require(:comment).permit(:content)
  end
end
