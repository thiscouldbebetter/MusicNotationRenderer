
class VisualCircle
{
	constructor(radius, isFilled)
	{
		this.radius = radius;
		this.isFilled = isFilled;
	}

	draw(display, drawPos)
	{
		display.drawCircle
		(
			drawPos,
			this.radius,
			(this.isFilled ? display.colorFore : null), // colorFill
			display.colorFore // colorBorder
		);
	}
}
 