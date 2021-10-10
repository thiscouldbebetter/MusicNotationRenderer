
class Session
{
	static Instance = new Session();

	draw(display)
	{
		this.song.draw(display, this);
	}
}
