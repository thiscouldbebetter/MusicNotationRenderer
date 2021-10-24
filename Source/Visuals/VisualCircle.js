
class VisualCircle extends Visual
{
	constructor(radius, isFilled)
	{
		super();
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

	fromStringJSON_ObjectPrototypesSet()
	{
		// Do nothing.
	}
}
 