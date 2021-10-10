
class VisualLine
{
	constructor(fromPos, toPos)
	{
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
}
 