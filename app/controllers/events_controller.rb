class EventsController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  def index
    @events = current_user.events.recent
  end

  def show
  end

  def new
    @event = Event.new
  end

  def create
    @event = current_user.events.new(event_params)

    if @event.save
      redirect_to @event, notice: "タスク「#{@event.title}」を登録しました"
    else
      render :new
    end
  end

  def edit
  end

  def update
    @event.update!(event_params)
    redirect_to events_url, notice: "タスク「#{@event.title}」を更新しました"
  end

  def destroy
    @event.destroy
    redirect_to events_url, notice: "タスク「#{@event.title}」を削除しました"
  end


  private

  def event_params
    params.require(:event).permit(:title, :description, :deadline, :priority, :progress, :start_date, :end_date)
  end

  def set_task
    @event = current_user.events.find(params[:id])
  end

end
