
class VisualImage extends Visual
{
	constructor(image)
	{
		super();
		this.image = image;
	}

	draw(display, drawPos)
	{
		display.drawImage(this.image, drawPos);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		throw new Error("todo");
	}
}