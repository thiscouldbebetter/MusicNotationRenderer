
class VisualLine extends Visual
{
	constructor(fromPos, toPos)
	{
		super();
		this.fromPos = fromPos;
		this.toPos = toPos;
	}

	draw(display, drawPos)
	{
		display.drawLine
		(
			this.fromPos.clone().add(drawPos),
			this.toPos.clone().add(drawPos),
			display.colorFore
		);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		this.fromPos.__proto__ = Coords.prototype;
		this.toPos.__proto__ = Coords.prototype;
	}
}
 