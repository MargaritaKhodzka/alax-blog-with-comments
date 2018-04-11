class CommentsController < ApplicationController
  before_action :set_post

  def index
    @comments = @post.comments
    respond_to do |format|
      format.html { render 'index.html', layout: false }
      format.js { render 'index.js', layout: false }
    end
  end

  def create
    @comment = @post.comments.build(comments_params)
    if @comment.save
      render 'create.js', layout: false
    else
      render 'posts/show'
    end
  end


  private
  def set_post
    @post = Post.find(params[:post_id])
  end

  def comments_params
    params.require(:comment).permit(:content)
  end
end
