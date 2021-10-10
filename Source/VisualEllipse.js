
class VisualEllipse
{
	constructor(size, rotationInTurns, isFilled)
	{
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
}