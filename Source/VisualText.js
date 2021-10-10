
class VisualText
{
	constructor(text, font)
	{
		this.text = text;
		this.font = font;
	}

	draw(display, drawPos)
	{
		display.drawText(this.text, this.font, drawPos, display.colorFore);
	}
}