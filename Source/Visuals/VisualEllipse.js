
class VisualEllipse extends Visual
{
	constructor(size, rotationInTurns, isFilled)
	{
		super();
		this.size = size;
		this.rotationInTurns = rotationInTurns;
		this.isFilled = isFilled;
	}

	draw(display, drawPos)
	{
		display.drawEllipse
		(
			drawPos,
			this.size,
			this.rotationInTurns,
			(this.isFilled ? display.colorFore : null), // colorFill
			display.colorFore // colorBorder
		);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		this.size.__proto__ = Coords.prototype;
	}
}