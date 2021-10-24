
class Page
{
	constructor(index, size, margin, drawables, staffGroup)
	{
		this.index = index;
		this.size = size;
		this.margin = margin;
		this.drawables = drawables;
		this.staffGroup = staffGroup;
	}
  
	// json
 
	fromStringJSON_ObjectPrototypesSet()
	{
		this.drawables.forEach(x =>
		{
			x.__proto__ = Drawable.prototype;
			x.fromStringJSON_ObjectPrototypesSet();
		});
		this.staffGroup.__proto__ = StaffGroup.prototype;
		this.staffGroup.fromStringJSON_ObjectPrototypesSet();
	}
 
	// drawing
 
	draw(display, session, song)
	{
		display.drawRectangle
		(
			Coords.Instances().Zeroes,
			this.size,
			null, // colorFill
			display.colorFore
		)

		this.drawables.forEach(drawable =>
		{
			drawable.draw(display);
		});
 
		this.staffGroup.draw(display, session, song, this);
	}
}
