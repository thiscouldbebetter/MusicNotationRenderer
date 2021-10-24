
class Drawable
{
	constructor(visual, pos)
	{
		this.visual = visual;
		this.pos = pos;
	}

	draw(display)
	{
		this.visual.draw(display, this.pos);
	}

	fromStringJSON_ObjectPrototypesSet()
	{
		this.visual.__proto__ = Visual.fromStringJSON_ObjectPrototypesSet(this.visual);
		this.pos.__proto__ = Coords.prototype;
	}
}