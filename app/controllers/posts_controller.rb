class PostsController < ApplicationController
  before_action :set_post, only [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
    @comments = @post.comments
    @comment = Comment.new
  end

  def create
    @post = Post.new(post_params)
  end

  def update

  end

  def destroy

  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
