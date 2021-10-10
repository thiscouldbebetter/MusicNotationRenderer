
class Page
{
	constructor(index, size, staves)
	{
		this.index = index;
		this.size = size;
		this.staves = staves;
	 
		this.staffIndexSelected = 0;
	}

	margin()
	{
		return 16;
	}
 
	staffSelected()
	{
		return this.stave[this.staffIndexSelected];
	}
 
	spaceBetweenStaves()
	{
		return 64;
	}
 
	// json
 
	fromStringJSON_ObjectPrototypesSet()
	{
		for (var i = 0; i < this.staves.length; i++)
		{
			var staff = this.staves[i];
			staff.__proto__ = Staff.prototype;
			staff.fromStringJSON_ObjectPrototypesSet();
		}
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
 
		for (var i = 0; i < this.staves.length; i++)
		{
			var staff = this.staves[i];
			staff.draw(display, session, song, this);
		}
	}
}
