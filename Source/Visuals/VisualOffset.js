
class VisualOffset extends Visual
{
	constructor(offset, child)
	{
		super();
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

	fromStringJSON_ObjectPrototypesSet()
	{
		this.offset.__proto__ = Coords.prototype;
		Visual.fromStringJSON_ObjectPrototypesSet(this.child);
	}
}