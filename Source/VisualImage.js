
class VisualImage
{
	constructor(image)
	{
		this.image = image;
	}

	draw(display, drawPos)
	{
		display.drawImage(this.image.systemImage);
	}
}