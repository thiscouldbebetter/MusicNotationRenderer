
class VisualText extends Visual
{
	constructor(text, fontName)
	{
		super();
		this.text = text;
		this.fontName = fontName || Font.Instances().Default.name;
	}

	draw(display, drawPos)
	{
		display.drawText(this.text, this.font(), drawPos, display.colorFore);
	}

	font()
	{
		return Font.byName(this.fontName);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		// Do nothing.
	}
}