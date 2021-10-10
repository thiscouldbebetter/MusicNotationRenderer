
class VisualOffset
{
	constructor(offset, child)
	{
		this.offset = offset;
		this.child = child;
	 
		this._drawPosSaved = new Coords();
	}

	draw(display, drawPos)
	{
		this._drawPosSaved.overwriteWith(drawPos);
		drawPos.add(this.offset);
		this.child.draw(display, drawPos);
		drawPos.overwriteWith(this._drawPosSaved);
	}
}